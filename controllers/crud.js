const pool = require('../database/db');


//Guardar
exports.save = async (req, res) =>{
    const idu =req.body.idu;
    const nombrepruebax = req.body.user;
    console.log(idu +'--'+nombrepruebax); 
    const result = await pool.query("Insert Into prueba1 (id, nombreprueba) values ($1, $2)", [
        idu,
        nombrepruebax,
    ]);
    console.log(result);
};

//Editar
exports.update = async (req, res) =>{
    const idu =req.body.idu;
    const nombrepruebax = req.body.user;
    console.log(idu +'--'+nombrepruebax); 
    const result = await pool.query("update prueba1 set nombreprueba=$1 where id=$2", [
        nombrepruebax,
        idu,
    ]);
    console.log(result);
    res.redirect('/');
};

