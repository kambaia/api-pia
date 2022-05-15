import mongoose, { Model, Schema } from "mongoose";
import { ISchool } from "../interfaces/SchoolInterface";

const schoolShema: Schema = new Schema({
	schoolCode:String,
	schoolLogo: { type: String, required: true },
	schoolCover: { type: String, required: true },
	schoolName: { type: String, required: true },
	schoolIdentity: { type: String, required: true },
	schoolNif: { type: String},
	fundationDate: { type: String, required: true },
	shoolRepresentative: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	address: {
		street: { type: String },
		city: { type: String },
		province: { type: String },
		country: { type: String }
	},
	contact: {
		unitel:String,
		movicel:String,
		fixe:String,
	},
	definition: {
		 colorSchool:String
	},
}, {
	timestamps: true
})

// Export the model and return your IUser interface
export const School:Model<ISchool> = mongoose.models.School || mongoose.model('School', schoolShema);

