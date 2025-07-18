import pool from '../db.js';
import bcrypt from 'bcrypt';

const Usuario = {
  async criar(nome, email, senha) {
    const hash = await bcrypt.hash(senha, 10); // hash da senha
    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3)';
    return pool.query(query, [nome, email, hash]);
  },

  async login(email, senha) {
    const query = 'SELECT * FROM usuarios WHERE email = $1';
    const res = await pool.query(query, [email]);

    if (res.rowCount === 0) {
      // usuário não encontrado
      return null;
    }

    const usuario = res.rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
      // senha incorreta
      return null;
    }

    // Retorna dados do usuário sem a senha
    return {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
    };
  },
};

export default Usuario;
