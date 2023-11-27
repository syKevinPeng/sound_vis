# Music Visulization: A CMSC764 Class Project

## How to Run
### Install Git LFS
See https://git-lfs.com/

### Pull latest commit
```sh
git pull && git lfs pull
```

### Compile frontend
**very likely not needed since it would have been compiled already**
**If you modify anything in frontend, you need to recompile**
```sh
cd frontend
npm install
npm run build
```

### Run backend
```sh
python3 -mvenv .venv
source .venv/bin/activate
pip3 install -r requirements.txt
PORT=8080 python3 app.py
```