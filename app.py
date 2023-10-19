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
    return send_from_directory(".", path)


@app.get("/random/1000")
def random(n: int=1000):
    arr = np.column_stack((np.arange(n), np.random.rand(n))).tolist()
    return jsonify(arr)


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
    app.run(threaded=True, debug=True, port=0)
