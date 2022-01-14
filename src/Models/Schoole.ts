import mongoose, { model, Schema } from "mongoose";
import { ISchool } from "../interfaces/SchoolInterface";

const schoolShema: Schema = new Schema({
   schoolPhoto: { type: String, required: true },
   schoolCover: { type: String, required: true },
   schoolName: { type: String, required: true },
   schoolIdentity: { type: String, required: true },
   birthDateFundation: { type: String, required: true },
   shoolRepresentative: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
   timestamps: true
})
export default model<ISchool>('School', schoolShema);
