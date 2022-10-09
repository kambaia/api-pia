import mongoose, { Model, Schema } from "mongoose";
import { IStudentEnrollment } from "../interfaces/StudentInterfece";
const studentRegistrationSchema: Schema = new Schema({
  studentType: {
    type: String,
  },
  anrolNumber: {
    require: true,
    default: 0,
    type: Number,
  },
  situation: {
    type: String,
  },
  academicYearId: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "AcademicYear",
 },
  groupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "group",
  },
  studentHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },
});

export const StudentEnrollment: Model<IStudentEnrollment> =
  mongoose.models.StudentEnrollment || mongoose.model("StudentEnrollment", studentRegistrationSchema);


