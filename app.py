from hashlib import sha384
from io import BytesIO
from os import getenv
from pathlib import Path
import numpy as np
from flask import (
    Flask,
    jsonify,
    redirect,
    request,
    Response,
    send_from_directory,
)
from werkzeug.exceptions import RequestEntityTooLarge
from flask_compress import Compress


app = Flask(__name__, static_folder=".")
Compress(app)


@app.get("/")
def index():
    return redirect("index.html")


@app.get("/<path:path>")
def static_file(path: str):
    return send_from_directory("./frontend/dist", path)


@app.get("/random/1000")
def random(n: int = 1000):
    arr = np.column_stack((np.arange(n), np.random.rand(n))).tolist()
    return jsonify(arr)


@app.get("/sound-feature/<string:type>")
def sound_feature(type:str):
    np_file = Path(__file__).parent / "deep_model" / f"feature_maps_1_2_{type}.npy"
    etag = '"' + sha384(np_file.read_bytes()).hexdigest() + '"'
    # print("1", request.headers.get("If-None-Match"))
    # print("2", etag)
    if (
        request.headers.get("If-None-Match", "")
        .rstrip('"')
        .startswith(etag.rstrip('"'))  # workaround for Compress middleware
    ):
        return Response(status=304)
    arr3d: np.ndarray = np.load(np_file)

    res = jsonify(arr3d.tolist())
    res.headers.set("ETag", etag)
    return res


@app.post("/upload")
def upload():
    print("files:", request.files)
    if "file" not in request.files:
        return Response("ERROR: No file uploaded", 400)
    try:
        stream = request.files["file"].stream
    except RequestEntityTooLarge:
        return Response("ERROR: File too large", 400)
    return random(100)


if __name__ == "__main__":
    app.run(
        threaded=True,
        host="0.0.0.0",
        port=int(getenv("PORT", "8080")),
        debug=getenv("DEBUG", "").lower() in ("true", "1"),
    )
