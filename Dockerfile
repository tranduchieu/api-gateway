# DOCKER-VERSION 1.9.1
FROM    ubuntu:latest
MAINTAINER Hieu Tran <hieu.tranduc@gmail.com>

# Install git
RUN apt-get install -y git

# Install NodeJS
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN sudo apt-get install -y nodejs

# Upgrade NPM
RUN sudo npm install npm -g

# Install Node global packages
RUN sudo npm install -g eslint nodemon@dev

ADD . /usr/src/nodeservice
WORKDIR /usr/src/nodeservice
RUN npm install
