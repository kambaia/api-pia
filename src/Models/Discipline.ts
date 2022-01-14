import { model, Schema } from "mongoose"
import { IDiscipline } from "../interfaces/InicializeConfigInstitutionInterface";
const disciplineSchema: Schema = new Schema({
   discipline: {
      type: String,
      required: true
   },
   sigle: {
      type: String,
   },
}, {
   timestamps: true
})
export default model<IDiscipline>('discipline', disciplineSchema);