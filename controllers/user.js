//const {response} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');




const usuariosGet = (req, res ) => {
    const query = req.query;
    res.status(200).json({
        "msg":"GET From Controller",
        query
    });
}


const usuariosPost = async (req, res ) => {
//    const body = req.body;

console.log ('aqui paso')

   

    const {nombre, correo, password,rol} = req.body;
    const usuario = new Usuario({nombre, correo, password,rol});

    // Varificar Correo
  


    // Encriptar contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = await bcryptjs.hash(password, salt);

    try {
        await usuario.save();
        res.status(200).json({
            "usuario": usuario,
            usuario
        });

        
    } catch (error) {
        res.status(500).json({
            "error": error.message
        })
        
    }
    

   
}

const usuariosPut = async (req, res ) => {
    const {id} = req.params;
    const {_id, password, google, correo, ...resto} = req.body;
    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = await bcryptjs.hash(password, salt);

    }
    const usuario = await Usuario.findByIdAndUpdate(id,resto);
    res.status(200).json({
        "msg":" PUT From Controller",
        id
    });
}

const usuariosDelete = (req, res ) => {
    res.status(200).json({
        "msg":" Delete From Controller"
    });
}

const adminGet = (req, res ) => {
    res.status(200).json({
        "msg":"GET  ADMIN  From   Controller"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    adminGet
}