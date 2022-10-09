import mongoose, { Model, Schema } from "mongoose";
import { IStudent } from "../interfaces/StudentInterfece";
import { Gender } from "../interfaces/UserInterface";

const studentSchema: Schema = new Schema({
  profile: {
    thumbnail: { type: String },
    name: { type: String },
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },
  studentIdentity: {
    type: String,
    required: true,
  },
  studentIdentityValiteData: {
    type: String,
    required: true,
  },
  studentDocumentIdentity: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  studetNumber: {
    type: String,
    required: true,
  },
  studetPhoneNumber: {
    type: String,
  },
  address: {
    street: { type: String },
    city: { type: String },
    province: { type: String },
    country: { type: String },
  },
  parents: {
    father: { type: String },
    mother: { type: String },
    phoneNumber: { type: String },
    opionalNumber: { type: String },
  },
  gender: { type: String, enum: Object.values(Gender) },
  deficiency: { type: String },
  active: { type: Boolean },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  schoolId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "School",
  },
  univercityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "university",
    required: false,
  },
});

export const Student: Model<IStudent> =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
