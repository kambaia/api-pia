import mongoose, { model, Schema } from "mongoose";
import { ISchool } from "../interfaces/SchoolInterface";

const schoolShema: Schema = new Schema({
   universityPhoto: { type: String, required: true },
   universityCover: { type: String, required: true },
   universityName: { type: String, required: true },
   universityIdentity: { type: String, required: true },
   birthDateFundation: { type: String, required: true },
   adress: { type: Number, required: true },
   shoolRepresentative: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
   timestamps: true
})
export default model<ISchool>('University', schoolShema);
