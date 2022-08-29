const role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '')=>{
    const existeRol = await role.findOne({rol});
    if(!existeRol) throw new Error(`Role ${rol} No esrta registrado`)
}
const existeEmail = async (correo = '') => {
    console.log('AQUI')
    const email = await Usuario.findOne({correo});
    if (email){
        throw new Error(`Correo ${correo} esta registrado`);
    }
}

const existeId = async (id) => {
    const existeID = await Usuario.findById(id);
    if (!existeID){
        throw new Error(`El ${id} no esta registrado`);
    }
}


module.exports = { 
    esRoleValido,
    existeEmail,
    existeId
}