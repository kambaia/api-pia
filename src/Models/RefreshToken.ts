import { model, Schema } from "mongoose";
import { IRefreshToken } from '../interfaces/UserInterface';

const refreshTokenSchema: Schema = new Schema({
	expireIn: { type: String, required: true, unique: true },
}, { timestamps: true });                                                                                                       


// Export the model and return your IUser interface
export default model<IRefreshToken>('refreshToken', refreshTokenSchema);

