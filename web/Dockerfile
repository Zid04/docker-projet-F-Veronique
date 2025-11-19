FROM node:latest 

WORKDIR /web 
# creer un dossier de travail dans le conteneur
COPY package*.json ./
# copier les fichiers package.json 
RUN npm install
# installer les dependances
COPY . .
# copier tout le contenu du dossier local (./web) dans le conteneur
EXPOSE 8080
CMD ["npm", "start"]
# exposer le port 8080 pour l'application web
