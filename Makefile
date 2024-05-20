build:
	docker compose up --build

up:
	docker compose up

up-detach:
	docker compose up -d

logs:
	clear && docker compose logs -f

down:
	docker compose down -v

restart:
	make down && make up

restart-detach:
	make down && make up-detach