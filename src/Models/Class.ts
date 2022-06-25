import mongoose, { Model, Schema } from 'mongoose';
import { IClass } from '../interfaces/InicializeConfigInstitutionInterface';
const  classSchema: Schema = new Schema({
   className: { type: String, required: true },
   year:{
      type:String
   },
   typeClass:{ type:String},
   status:{type:Boolean},
   evaluation:{type:Number},
   feeId: { type: mongoose.Schema.Types.ObjectId, ref: "Fee" },
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
   academicYearId: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
   }, {
   timestamps: true
})
// Export the model and return your IUser interface
export const Class:Model<IClass> = mongoose.models.Class || mongoose.model('classe', classSchema);
