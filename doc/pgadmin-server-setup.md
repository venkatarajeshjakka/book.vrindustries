# Adding PostgreSQL Server in pgAdmin

Follow these steps to connect your local PostgreSQL Docker instance to pgAdmin:

## 1. Open pgAdmin

- Launch pgAdmin on your system.

## 2. Add New Server

- In the left sidebar, right-click on **Servers** and select **Create > Server...**

## 3. General Tab

- **Name:** `Local Docker Postgres` (or any name you prefer)

## 4. Connection Tab

- **Host name/address:** `localhost`
- **Port:** `5432`
- **Username:** `postgres`
- **Password:** `postgres`
- (Optional) Check "Save Password"

## 5. Save

- Click **Save** to add the server.

## 6. Access Your Database

- Expand the new server node to see your `business_db` database.

---

> If you changed any credentials or ports in your `docker-compose.yml`, use those values instead.
> Ensure your Docker container is running before connecting.
