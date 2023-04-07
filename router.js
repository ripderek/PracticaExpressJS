//este archivo servira para las direcciones 
const {Router} = require('express');
const pool = require('../ExpressJS/database/db');
const router = Router();

//ver registros
router.get('/',async (req,res)=>{
    const result = await pool.query('select * from Prueba1', (error,results)=>{
        if(error){
            throw error;
        }
        else {
            //console.log(results);
            res.render('index.ejs', {data:results.rows});
        }
    })
    //res.send(result.rows); 
})


//Crear un registro
router.get('/create', (req,res)=>{
   res.render('create.ejs');
})

//Editar un registro
router.get('/edit/:id', async (req, res)=>{
    const id = req.params.id;

    const result = await pool.query("Select * from prueba1 where id =$1", [
        id,
    ]);
    console.log(result.rows[0]);
    res.render('edit.ejs', {user:result.rows[0]});
   
})
//Eliminar un registro 
router.get('/delete/:id', async (req, res)=>{
    const id = req.params.id;

    const result = await pool.query("delete from prueba1 where id =$1", [
        id,
    ]);
    console.log(result.rows[0]);
    res.redirect('/');
   
})


//metodos para el crud
const crud = require('./controllers/crud');
router.post('/save', crud.save);

//metodo para el editar
router.post('/update',crud.update);

/*
router.get('/',async (req,res)=>{
    const result = await pool.query('select * from Prueba1')
    //res.send(result.rows);
    res.render('index')
})
*/

//para enviar una variable = despues del index , {var1: 'Esto es una variable'}
// y en el ejs= <%= var1%
/*
router.get('/',(req, res)=>{
    res.render('index');
})
*/


module.exports= router;