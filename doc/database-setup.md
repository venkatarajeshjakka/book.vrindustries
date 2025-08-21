# Database Setup (PostgreSQL with Docker Compose)

## 1. Create `docker/docker-compose.yml`

```yaml
version: '3.8'
services:
  db:
  image: postgres:latest
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: business_db
    ports:
      - "5432:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata:
```

## 2. Create `.env` in project root

```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/business_db
```

## 3. Start PostgreSQL

```sh
cd docker
docker compose --env-file ../.env up -d
```
