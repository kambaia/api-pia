import mongoose, { model, Schema } from 'mongoose';
import { ICourse } from "../interfaces/InicializeConfigInstitutionInterface";

const schemaCourse: Schema = new Schema({
   course: {
      type: String,
      required: true
   },
   sigla: {
      type: String,
   },
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
}, {
   timestamps: true
})

export default model<ICourse>('course', schemaCourse);