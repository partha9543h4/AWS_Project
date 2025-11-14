#!/bin/bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo docker pull shekarhub/backend
sudo docker run -d -p 3000:3000 shekarhub/backend
