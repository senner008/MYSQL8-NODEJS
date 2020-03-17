### MySQL 8 connector for Node.js
https://dev.mysql.com/doc/dev/connector-nodejs/8.0/

### Run Docker container with MySQL 8:
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-password -p 33060:33060 -d mysql:latest

### To enter MySQL bash in container:
docker exec -it some-mysql mysql -u root -pmy-password