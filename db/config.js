const mongoose = require('mongoose');

const dbConnect = async()=>{

    try {

        await mongoose.connect(process.env.MONGODB,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex: true,
            //useFindAndModify: false

        });

        console.log('Base de datos online');
        
    } catch (error) {
        throw new Error('Error Base de datos:' + error.message);
        
    }

}

module.exports = {
    dbConnect
}