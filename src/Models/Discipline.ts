import mongoose, { model, Schema } from 'mongoose';
import { IDiscipline } from "../interfaces/InicializeConfigInstitutionInterface";
const disciplineSchema: Schema = new Schema({
   discipline: {
      type: String,
      required: true
   },
   sigle: {
      type: String,
   },
   status: {
      type: Boolean,
   },
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
   academicYearId: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },

}, {
   timestamps: true
})
export default model<IDiscipline>('Discipline', disciplineSchema);