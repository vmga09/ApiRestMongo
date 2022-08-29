const { Router} = require('express');
const admin = require('./../controllers/user');
const router = Router();

router.get('/',admin.adminGet );
// router.put('/', user.usuariosPut);
// router.post('/', user.usuariosPost);
// router.delete('/', user.usuariosDelete);


module.exports = router;