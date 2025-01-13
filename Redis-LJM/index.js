const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redis = require('redis');
const { promisify } = require('util');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const redisClient = redis.createClient();


redisClient.on('error', (err) => console.error('Error en la conexión a Redis:', err));
redisClient.on('connect', () => console.log('Conectado a Redis'));
redisClient.connect();

const getAsync = promisify(redisClient.get).bind(redisClient);


const sessionConfig = {
  store: new RedisStore({ client: redisClient, ttl: 600 }), 
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionConfig));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'luis',
  password: '123',
  database: 'redis-ljm',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const [usuarios] = await db.promise().query('SELECT * FROM usuarios');
    res.json(usuarios);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/usuarios/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const [usuario] = await db.promise().query('SELECT * FROM usuarios WHERE id = ?', [userId]);

    if (usuario.length === 0) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.json(usuario[0]);
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).send('Internal Server Error');
  }
})
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
