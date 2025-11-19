import express from 'express'; // importer express
import mysql from 'mysql/promise'; // importer mysql/promise
import dotenv from 'dotenv'; // importer dotenv

dotenv.config();

const app = express(); // créer une instance d'express
app.set('view engine', 'ejs');
app.set('views', './views');

const dbconfig = // configuration de la connection a la base de données
{
    host: "database",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
};

async function getconnection() // fonction pour obtenir une connection a la base de données
{
    return mysql.createConnection(dbconfig);
}

app.use(express.urlencoded({ extended: true })); // middleware pour parser les données du formulaire
app.get('/', async (req, res) => // route pour la page d'accueil
{
    res.render('index', { message: null, names: [] });
});
app.post('/', async (req, res) => // route pour gérer les soumissions de formulaire
{
    let message = null;
    let names = [];

    try // essayer de se connecter a la base de données
    {
        const connection = await getconnection();
        const action = req.body.action;

        if (action === 'check_db') // vérifier la connexion a la base de données
        {
            message = 'communication avec la base de données réussie';
        }
        else if (action === 'genrate') // générer des noms aléatoires
        {
            const [adjectives] = await
                connection.execute(
                    'SELECT adjective FROM adjectives ORDER BY RAND() LIMIT 10');
            const [nouns] = await
                connection.execute(
                    'SELECT noun FROM nouns ORDER BY RAND() LIMIT 10');
            names = adjectives.map((adj, index) => `${adj.adjective} ${nouns[index].noun}`);
        }
        await connection.end(); // fermer la connection a la base de données
    }
    catch (error) // gérer les erreurs de connexion a la base de données
    {
        message = ("impossible de communiquer avec la base de données")
    }
    res.render('index', { message, names });
});
app.listen(8080, () => // démarrer le serveur
{
    console.log(`Server is running on port 8080`) //
}); 