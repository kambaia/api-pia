import mongoose, { Model, Schema } from 'mongoose';
import { IFee } from "../interfaces/InicializeConfigInstitutionInterface"
const feeShema: Schema = new Schema({
   fee: {
      type: Number,
      required: true
   },
   year: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   status: {
      type: Boolean,
   },
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
   academicYearId: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
   updateAT: {
      type: Date,
      default: Date.now
   }
})

export const Fee:Model<IFee> = mongoose.models.Fee || mongoose.model('Fee', feeShema);
