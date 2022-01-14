import { Schema } from "mongoose"

const mongoose = require('mongoose')

const clientUserSchema:Schema = new Schema({
   nome: {
      type: String,
      required: true
   },
   telefone: {
      type: String,
      required: true
   },
   email: {
      type: String,
     
   },
   data_v: {
      type: Date
   },
})

module.exports = mongoose.model('Client', clientUserSchema);