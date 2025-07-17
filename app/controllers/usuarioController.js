// controllers/userController.js

import path from 'path';
import User from '../models/usuarioModel.js'; // extensão .js é obrigatória em ES Modules

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Usuario from '../models/usuarioModel.js';

// Emular __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const usuarioController = {
  getForm(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  },

  async criarUsuario(req, res) {
    const { nome, email, senha } = req.body;
    try {
      await Usuario.create(nome, email, senha);
      res.send('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao cadastrar usuário.');
    }
  }
};

export default usuarioController;
