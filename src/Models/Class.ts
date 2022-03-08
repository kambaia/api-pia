import mongoose, { model, Schema } from 'mongoose';
import { IClass } from '../interfaces/InicializeConfigInstitutionInterface';
const  classSchema: Schema = new Schema({
   className: { type: String, required: true },
   year:{
      type:String
   },
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
   }, {
   timestamps: true
})

export default model<IClass>('classe', classSchema);