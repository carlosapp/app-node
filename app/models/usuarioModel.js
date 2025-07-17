// models/userModel.js

import pool from '../db.js';
import bcrypt from 'bcrypt';

const Usuario = {
  async criar(nome, email, senha) {
    const hash = await bcrypt.hash(senha, 10); // 10 é o "salt rounds"
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
    return pool.query(query, [nome, email, hash]);
  }
};

export default Usuario;
