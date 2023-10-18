import numpy as np
from flask import Flask, jsonify, request, Response, send_file
from pathlib import Path
from werkzeug.exceptions import RequestEntityTooLarge


app = Flask(__name__)


@app.get("/")
def index():
    return send_file(Path(__file__).parent / "index.html")


@app.get("/random/<int:n>")
def random(n: int = 1000):
    ys = np.random.rand(n).tolist()
    return jsonify({"x": list(range(n)), "y": ys})


# show an example of file upload
@app.post("/upload")
def upload():
    if "file" not in request.files:
        return Response("ERROR: No file uploaded", 400)
    try:
        stream = request.files["file"].stream
    except RequestEntityTooLarge:
        return Response("ERROR: File too large", 400)
    return random()
