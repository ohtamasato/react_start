all: start

DOCKER_COMPOSE = docker-compose -p ohtamasato -f ./docker-compose.yml

start: buildContainers

buildContainers:
	$(DOCKER_COMPOSE) up

stop:
	$(DOCKER_COMPOSE) stop

clean:
	$(DOCKER_COMPOSE) down --rmi all
