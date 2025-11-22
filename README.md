## Table des matieres
-[Description](#description)
-[Lancer le projet](#lancer-le-projet)
-[Gestion des environnements](#gestion-des-environnements)
-[Liens utiles](#liens-utiles)
-[remarques](#remarques)
-[source du projet](#source-du-projet )

##Description
c'est une application web permettant de:
-verifier si il existe une connexion avec la base de donnee MYSQL
-Genère  10 noms de groupes aleatoires.
-ces noms sont au format: **The {adjective}{noun}**.
le site web est dans l'adresse http://localhost:8085
phpmyadmin est dans l'adresse http://localhost:8086

## lancer le projet
-cloner le depot
``bash 
-git clone https://github.com/Zid04/docker-projet-F-Veronique.git
-cd docker-projet-F-Veronique
-cd .env.dist .env (pour creer son fichier .env)
-docker build -t bandnames1.0.0
-docker-compose up -d
-docker ps (pour verifier que tout fonctionne)
-docker exec -it <nom du conteneur de la base de donnée> mysql -u root -p (écrire son mot de passe qui est dans .env pour se connecter a la base de données)
-http://localhost:8085 pour accéder à l'application
docker-compose down -v (arreter le conteneur quand tu as fini)

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
### ce qui va changé
-l'hote, les identifiants, si configurere les ports
-le fichier .env change
-Paramètres de connexion réseau ajustés
-Installation uniquement des dépendances de production : npm install --production
-Lancement des migrations pour populiser la base de données de production
-Exécution des tests de performance ou de charge avant d'aller en production
## liens utiles
-Docker compose:
https://docs.docker.com/compose
https://docs.docker.com/guides
https://docs.docker.com/guides/nodejs
-MYSQL
https://hub.docker.com/_/mysql
-https://nodejs.org/en/docs
-https://expressjs.com

## remarques
-j'ai rencontré quelques difiiculté avec le mapping des ports le terme 8085:80 n'est pas la meme chose que 8085:80.
-Docker compose est très sensible à la casse et egalement a l'indennation
-node doit etre ecouter sur 0.0.0.0
-le fichier package.json doit etre installer avant npm install dans le dockerfile
-meme si c'est un projet dockeriser il ya des installations qui doivent etre faites comme express lors de conception si non lors du test la page est inaccessible.
## source du projet 
-database/init.sql requete d'initiation a la base de donnee
-web/view/index.ejs template EJS
-web/app.js serveur node/express principal
-web/Dockerfile definition de l'image node 
-web/package.json package-lock.json gestion des dependances
-.env.dist model de configuration d'environnement
-.gitignore fichier à ignorer
-compose.yaml fichier de configuration des services docker(volumes, ports, environnement ou fichier d'environnement)