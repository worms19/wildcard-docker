Run the server:


docker-compose -f docker-compose-prod.yml up

Run the server:

docker-compose -f docker-compose-prod.yml build

Run the server:

docker-compose -f docker-compose.yml build

Run the server:

docker-compose -f docker-compose.yml up

# Stop and remove container's using the target volume
docker-compose stop NAME_OF_CONTAINER
# We need the force flag, "-f", as the container is still bound to the volume
docker-compose rm -f NAME_OF_CONTAINER
# Next find your volume name in the following list
docker volume ls
# Finally remove the volume
docker volume rm wildcard_frontend-volume