import mongoose, { model, Schema } from "mongoose";
import { IRequestAccount } from "../interfaces/RequestAccountInterface";
const requestAccountShema: Schema = new Schema({
   studyNumber: { type: String, required: true },
   schoolName: { type: String, required: true },
   identityNumber: { type: String, required: true },
   schoolIdentity: { type: String, required: true },
   idSchools: { type: String, required: true },
   idStudent: { type: mongoose.Schema.Types.ObjectId, ref: "Student" }
}, {
   timestamps: true
})
export default model<IRequestAccount>('requestaccount', requestAccountShema);
