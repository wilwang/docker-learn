# docker-learn
Small example running docker and using docker-compose with micro services

This setup is useful for setting up and developing locally and is not meant for production use.

With the way the docker-compose.yml is set up, you will need to build each microservice first. This is because the volume being mounted is the entire project directory. A solution is to just mount a subfolder containing the source code and having the container build include the node_modules folder.