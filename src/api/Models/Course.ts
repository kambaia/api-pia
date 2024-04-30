import mongoose, { model, Schema } from 'mongoose';
import { ICourse } from "../../interfaces/InicializeConfigInstitutionInterface";

const schemaCourse: Schema = new Schema({
   course: {
      type: String,
      required: true
   },
   sigla: {
      type: String,
   },
   typeCourse: {
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

export default model<ICourse>('Course', schemaCourse);