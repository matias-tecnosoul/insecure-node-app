const express = require('express');
const app = express();

//  Usar variable de entorno en lugar de hardcodear
const API_KEY = process.env.API_KEY || 'default-dev-key';

app.use(express.json());

app.get('/', (req, res) => {
  console.log('Solicitud recibida');
  res.send('API Insegura funcionando');
});


app.get('/secure-data', (req, res) => {
  const key = req.headers['x-api-key'];
  if (key !== API_KEY) {
    return res.status(403).json({ error: 'Acceso denegado' });
  }
  res.json({ secret: '12345' });
});

module.exports = app;

