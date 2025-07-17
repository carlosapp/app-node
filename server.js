import express from 'express';
import path from 'path';
import userRoutes from './routes/usuarioRoutes.js';
import bodyParser from 'body-parser';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Emular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
