#!/bin/bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo docker pull shekarhub/frontend
sudo docker run -d -p 80:80 shekarhub/frontend
