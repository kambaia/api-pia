import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IUser, Gender } from '../interfaces/UserInterface';
const userSchema: Schema = new Schema({
	email: { type: String, required: true, unique: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	gender: { type: String, enum: Object.values(Gender) },
	active:{type:Boolean},
	address: {
		street: { type: String },
		city: { type: String },
		postCode: { type: String }
	},
	roles: { type: mongoose.Schema.Types.ObjectId, ref: "" },
}, { timestamps: true });

userSchema.index({ email: 1 });
// Virtual method
userSchema.virtual("fullName").get(function (this: IUser) {
	return `${this.firstName} ${this.lastName}`;
});
// When the user registers
userSchema.pre(
	"save",
	async function (this: IUser, next: mongoose.HookNextFunction) {
		// only hash the password if it has been modified (or is new)
		if (!this.isModified("password")) return next();
		// Random additional data
		const salt = await bcrypt.genSalt(10);

		const hash = await bcrypt.hashSync(this.password, salt);

		// Replace the password with the hash
		this.password = hash;

		return next();
	}
);

// Compare a candidate password with the user's password
userSchema.methods.comparePassword = async function (
	candidatePassword: string
): Promise<boolean> {
	// So we don't have to pass this into the interface method
	const user = this as IUser;
	return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

// Export the model and return your IUser interface
export default model<IUser>('User', userSchema);
