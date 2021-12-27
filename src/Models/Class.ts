import { model, Schema } from 'mongoose';
import { IClass } from '../interfaces/InicializeConfigInstitutionInterface';
const  classSchema: Schema = new Schema({

   classMeet: { type: String, required: true },
   year:{
      type:String
   },
   }, {
   timestamps: true
})

export default model<IClass>('classe', classSchema);