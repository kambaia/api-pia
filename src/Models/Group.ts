import { model, Schema } from 'mongoose';
import {IGroup } from '../interfaces/InicializeConfigInstitutionInterface';
const  groupSchema: Schema = new Schema({
   goup: { type: String, required: true },
   year:{
      type:String
   },
   }, {
   timestamps: true
})

export default model<IGroup>('group', groupSchema);