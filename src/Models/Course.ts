import { model, Schema } from "mongoose";
import { ICourse } from "../interfaces/InicializeConfigInstitutionInterface";

const schemaCourse: Schema = new Schema({
   course: {
      type: String,
      required: true
   },
   cigla: {
      type: String,
   },
}, {
   timestamps: true
})

export default model<ICourse>('course', schemaCourse);