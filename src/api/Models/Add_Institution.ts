const mongoose = require('mongoose')

const CollecaoAddColegio= mongoose.Schema({
   datacadastro: {
      type: String,
   },
    encarregado:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Encarregado'
   },
   colegio:
   {type: mongoose.Schema.Types.ObjectId, 
      ref: 'Colegio'}
  });

module.exports = mongoose.model('add-colegio', CollecaoAddColegio )