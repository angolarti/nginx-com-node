FROM mysql:5.7

RUN usermod -u 1000 mysql
COPY setup.sql /docker-entrypoint-initdb.d