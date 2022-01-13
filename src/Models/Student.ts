import mongoose, { model, Schema } from "mongoose";
import { IStudent } from "../interfaces/StudentInterfece";

const studentSchema: Schema = new Schema({
   studentPhoto: {
      type: String,
      required: true
   },
   studentCover: {
      type: String,
      required: true // Atributo obrigatório
   },
   studentName: {
      type: String,
      required: true // Atributo obrigatório
   },
   studentIdentity: {
      type: String,
      required: true,
   },
   birthDate: {
      type: String,
   },
   studetNumber: {
      type: String,
      required: true,
   },
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   schoolId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'School'
   },
   univercityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'university'
   }
});

export default model<IStudent>('Student', studentSchema);
