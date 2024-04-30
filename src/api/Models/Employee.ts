import mongoose, { Model, Schema } from "mongoose";
import { IEmployee } from "../../interfaces/employeeInterface.";

const employeeShema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    birthDate: { type: String, required: true },
    description: { type: String },
    position: { type: String },
    address: {
      street: { type: String },
      city: { type: String },
      province: { type: String },
      country: { type: String },
      county: { type: String },
      neighborhood: { type: String }
    },
    contact: {
      unitel: String,
      movicel: String,
      fixe: String,
    },
    employeeIdentity: { type: String, required: true },
    employeeBiFile: { type: String },
    active: { type: Boolean, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    schoolId: { type: Schema.Types.ObjectId, ref: "School" },
    universityId: [{ type: Schema.Types.ObjectId, ref: "University" }],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
// Export the model and return your IUser interface
export const Employee: Model<IEmployee> = mongoose.models.Employee || mongoose.model('Employee', employeeShema);
