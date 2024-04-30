/* eslint-disable import/no-extraneous-dependencies */
import mongoose, { Model, Schema } from 'mongoose';
import { IUser } from '../../interfaces/UserInterface';

// eslint-disable-next-line @typescript-eslint/naming-convention
export enum CUSTOM_VALIDATION {
  DUPLICATED = 'DUPLICATED',
}

const userSchema: Schema = new Schema(
  {
    profile: {
      thumbnail: { type: String },
      name: { type: String },
    },
    userName:{ type: String, required: true},
    email: { type: String, required: true, unique:true},
    fullName: { type: String},
    phoneNumber: { type: String, required: true},
    password: {type:String, required:true},
    studentNumber: String,
    banned: { type: Boolean },
    active:  {
      type: Boolean,
      default: true
    },
    permission: { type: mongoose.Schema.Types.ObjectId, ref: 'Roles' },
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" }
  },
);
export const User: Model<IUser> =
  mongoose.models.User || mongoose.model('User', userSchema);
