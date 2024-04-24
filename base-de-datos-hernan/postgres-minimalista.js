import express from 'express';
import pg from 'pg';

const app = express();
const puerto = 3000;

const { Pool } = pg;
// Conexion a la base de datos para propositos academicos
// Obvio nunca le deben dejar el password en el repositorio
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'mysecretpassword',
  port: 5432,
});

const listAllUsers = async (request, response) => {
  const resultadoQueryHora = await pool.query(
    'SELECT id, name, email, createdAt FROM Users'
  );
  const usuarios = resultadoQueryHora.rows.map((fila) => {
    return {
      id: fila['id'],
      nombre: fila['name'],
      correo: fila['email'],
      creadoEl: fila['createdat'],
    };
  });
  return response.status(200).json(usuarios);
};

const insertUser = async (request, response) => {
  const body = request.body;
  console.log(body);
  const insertQuery = {
    text: 'INSERT INTO Users (name, email, password, createdAt) VALUES ($1, $2, $3, NOW()) returning id',
    values: [body['nombre'], body['correo'], body['clave']], //Ojo que el orden importa
  };
  const resultadoInsert = await pool.query(insertQuery);
  console.log(resultadoInsert);
  response
    .status(200)
    .json({ mensaje: 'Usuario creado con id ' + resultadoInsert.rows[0].id });
};

app.use(express.json());
app.get('/users', listAllUsers);
app.post('/users', insertUser);

app.listen(puerto, () => {
  console.log(`Proceso de servidor escuchando en el puerto ${puerto}`);
});
