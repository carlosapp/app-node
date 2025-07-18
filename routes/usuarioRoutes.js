// routes/usuarioRoutes.js
import express from 'express';
import usuarioController from '../app/controllers/usuarioController.js';

const router = express.Router();

router.get('/cadastro', usuarioController.getForm);         // GET /usuario/cadastro
router.get('/login', usuarioController.getLoginForm);       // GET /usuario/login
router.post('/cadastrar', usuarioController.criarUsuario);  // POST /usuario/cadastrar
router.post('/login', usuarioController.loginUsuario);      // ✅ POST /usuario/login

export default router;
