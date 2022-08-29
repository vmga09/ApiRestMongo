const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
     nombre: {
        type: 'string',
        required: [true, 'El nombre es obligatorio']
     },
     correo:{
        type: 'string',
        required: [true, 'El correo es obligatorio'],
        unique: true
     },
     password:{
        type: 'string',
        required: [true, 'El password es obligatorio']
     },
     img:{
        type: 'string'
     },
     rol: {
        type: 'string',
        required: true,
        emun: ['ADMIN_ROLE','USER_ROLE']
     },
     estado:{
        type: Boolean,
        default:true
     },
     google:{
        type: Boolean,
        default:false
     }
});

UsuarioSchema.methods.toJSON = function(){
    const { __v, password, ...usuario} = this.toObject();
    return usuario
}

module.exports = model('Usuario',UsuarioSchema);