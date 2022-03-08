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
   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
}, {
   timestamps: true
})
export default model<IDiscipline>('discipline', disciplineSchema);