//parametros de conexcion
//Coneccion a base de datos PostgreSQL
const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '123456',
    database: 'PracticaCrud',
    port: 5432
  })


module.exports = pool;