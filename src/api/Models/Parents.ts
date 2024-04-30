import { model, Schema } from "mongoose";
import { IParents } from "../../interfaces/ParentsInterface";

const schoolShema: Schema = new Schema({
	parentPhoto: { type: String, required: true },
	parentCover: { type: String, required: true },
	parentName: { type: String, required: true },
	parentIdentity: { type: String, required: true },
	birthDate: { type: String, required: true },
	students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
	shoolRepresentative: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {
	timestamps: true,
	toJSON: {
		virtuals: true,
	}
})
export default model<IParents>('School', schoolShema);
