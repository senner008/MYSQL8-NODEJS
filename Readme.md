### MySQL 8 connector for Node.js
https://dev.mysql.com/doc/dev/connector-nodejs/8.0/

### Run Docker container with MySQL 8:
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-password -p 33060:33060 -d mysql:latest

### Run Docker container with MySQL 8 with knex:
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-password -p 33060:3306 -d mysql:latest

### To enter MySQL bash in container:
docker exec -it some-mysql mysql -u root -pmy-password

create table test;

### env file
DB_HOST=localhost
DB_PORT=33060
DB_NAME=test
DB_USER=root
DB_PASSWORD=my-password