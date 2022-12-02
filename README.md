# [manuelpuchta.de](https://manuelpuchta.de/)

Built with [WordPress](https://wordpress.org/), used starter theme is [underscores](https://underscores.me/).

## Local development

[Docker](https://www.docker.com/) is used for local development.

URL: [http://localhost:8000](http://localhost:8000)

**Start**

```sh
# start (all containers/services)
docker-compose -f docker/docker-compose.yml up
```

When docker is finished, open http://localhost:8000 in your web browser.

**Stop**

```sh
# stop (without removing containers)
docker-compose -f docker/docker-compose.yml stop

# Stops containers and removes containers, networks, volumes, and images created by up.
docker-compose -f docker/docker-compose.yml down
```

### WordPress overview

- Site title: `A cool site title`
- Username: `wordpress`
- Password: `wordpress`
- Email: `dev@manuelpuchta.de`
- Site address: `http://localhost:8000`

### Database export/import

Make sure that `mysqldump` and `cat` is installed on your system, afterwards:

```sh
# List docker container images and copy mysql container id
docker ps

# Create database backup file
docker exec {CONTAINER_ID} /usr/bin/mysqldump -u root --password=somewordpress wordpress > mysql/db.sql

# Use database file
cat mysql/db.sql | docker exec -i {CONTAINER_ID} /usr/bin/mysql -u root --password=somewordpress wordpress
```
