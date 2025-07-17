// routes/userRoutes.js

import express from 'express';
import  usuarioController from '../app/controllers/usuarioController.js'; // precisa do `.js` no import

const router = express.Router();

router.get('/', usuarioController.getForm);
router.post('/cadastrar', usuarioController.criarUsuario);

export default router;
