// app.js
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const redisClient = require('./config/redisConfig');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json()); // Permite el uso de JSON en las peticiones
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'
// app.js
app.use(express.urlencoded({ extended: true }));


const sessionConfig = {
  store: new RedisStore({ client: redisClient, ttl: 600 }),
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionConfig));
app.use('/usuarios', userRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(`Internal Server Error: ${err.message}`);
  });

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
