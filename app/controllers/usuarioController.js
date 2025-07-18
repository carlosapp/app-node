// controllers/usuarioController.js
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Usuario from '../models/usuarioModel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const usuarioController = {
  getForm(req, res) {
    res.sendFile(path.join(__dirname, '../views/index.html')); // formulário cadastro
  },

  getLoginForm(req, res) {
    res.sendFile(path.join(__dirname, '../views/login.html')); // formulário login
  },

  async criarUsuario(req, res) {
    const { nome, email, senha } = req.body;
    try {
      await Usuario.criar(nome, email, senha);
      res.send('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao cadastrar usuário.');
    }
  },

  async loginUsuario(req, res) {
    const { email, senha } = req.body;
    try {
      const usuario = await Usuario.login(email, senha);
      if (!usuario) {
        return res.status(401).json({ erro: 'Email ou senha inválidos' });
      }
      res.json({ mensagem: 'Login realizado com sucesso!', usuario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: 'Erro ao realizar login' });
    }
  }
};

export default usuarioController;
