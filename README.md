## Table des matieres
-[Description](#description)
-[Installation](#installation)
-[Lancement du projet](#lancement-du-projet)
-[Construction  de l'image pour la production](#construction-image-production)
-[Structure du projet](#structure-du-projet)
-[Gestion des environnements](#gestion-des-environnements)
-[Liens utiles](liens-utiles)

##Description
c'est une application web permettant de:
-verifier si il existe une connexion avec la base de donnee MYSQL
-Genere  10 noms de groupes aleatoires.
-ces noms sont au format: **The {adjective}{noun}**.
##installation
cp .env.dist .env
Modifier ".env" si besoin
le site web est dans l'adresse http://localhost:8085
phpmyadmin est dans l'adresse http://localhost:8086
docker build -t bandnamegenerator:1.0.0 ./web
## structure du projet:
Docker-projet-F-Veronique
    database/init.sql
    web/views/index.ejs
    web/app.js 
    web/Dockerfile
    web/package.json
    .env
    .env.dist
    .gitignore
    compose.yaml
    README.md

## Gestion des environnements

### environnement production
-variable secretes via secrets
-image buildee (bandnamesgenerator:1.0.0) 
-pas d'acces direct MYSQL
-monitiring + backups

### environnement de developpement
-Port exposes: 8085:80 et 8086:80
-MYSQL lance en local
-code modifiable

## liens utiles
-Docker compose:
https://docs.docker.com/compose
https://docs.docker.com/guides
https://docs.docker.com/guides/nodejs
-MYSQL
https://hub.docker.com/_/mysql
-PhpmyAdmin:
https://www.PhpMyAdmin.net
-
