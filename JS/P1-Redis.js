const redis = require('redis');
const client = redis.createClient({ host: 'localhost', port: 6379, password: '19831983' });

client.on('connect', () => {
  console.log('Conectado a Redis');
});

client.on('error', (err) => {
  console.error(`Error en la conexión a Redis: ${err}`);
  client.quit();
});

const clave = 'miClave';
const valor = 'miValor';

client.set(clave, valor, (err, reply) => {
  if (err) {
    console.error('Error al escribir en Redis:', err);
    client.quit();
  } else {
    console.log('Clave escrita en Redis:', reply);

    client.get(clave, (err, reply) => {
      if (err) {
        console.error('Error al leer de Redis:', err);
      } else {
        console.log('Valor leído de Redis:', reply);

        client.incr('contador', (err, reply) => {
          if (err) {
            console.error('Error al incrementar contador en Redis:', err);
          } else {
            console.log('Contador en Redis:', reply);

            const listaKey = 'miLista';
            client.rpush(listaKey, 'elemento1');
            client.rpush(listaKey, 'elemento2');

            client.lrange(listaKey, 0, -1, (err, reply) => {
              if (err) {
                console.error('Error al leer la lista en Redis:', err);
              } else {
                console.log('Lista en Redis:', reply);
                client.quit();
              }
            });
          }
        });
      }
    });
  }
});
