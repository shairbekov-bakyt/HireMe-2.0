from python:3.11

workdir backend

copy requirements.txt ./requirements.txt

run pip install --upgrade pip
run pip install -r requirements.txt


copy run.sh /run.sh
run chmod +x /run.sh

copy . /backend

