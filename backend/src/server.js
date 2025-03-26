const express = require('express');
const { connectDB } = require('./config/db');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // ✅ Importa o pacote CORS
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Ativa CORS para aceitar requisições de outros domínios (como o frontend)
app.use(cors());

if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

// Middlewares
app.use(bodyParser.json());
app.use('/api', userRoutes);

const server = app.listen(PORT, () => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Server is running on port ${PORT}`);
  }
});

module.exports = { app, server };
