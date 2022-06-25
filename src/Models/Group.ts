import mongoose, { model, Schema } from 'mongoose';
import {IGroup } from '../interfaces/InicializeConfigInstitutionInterface';
const  groupSchema: Schema = new Schema({
   goup: { type: String, required: true },
   year:{
      type:String
   },
   status: {
      type: Boolean,
   },
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
   academicYearId: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },

   }, {
   timestamps: true
})

export default model<IGroup>('group', groupSchema);