# docker-learn
Small example running docker and using docker-compose with micro services.

This setup is useful for setting up and developing locally and is not meant for production use.

With the way the docker-compose.yml is set up, you will need to build each microservice first. This is because the volume being mounted is the entire project directory. A work-around is to just mount a subfolder containing the source code and having the container build include the node_modules folder. Some more setup work would be needed to make sure that the src app code can find the node_modules.

First, build all of the services,
```
> cd cart-service
> npm install
> cd ../product-service
> npm install
> cd ../user-service
> npm install
> cd ..
```

To run (you should be in the docker-learn directory), 
```
> docker-compose up
```
You can use ```docker-compose up -d``` to run in detached mode so that the containers are running the background

To stop,
```
> docker-compose down
```
