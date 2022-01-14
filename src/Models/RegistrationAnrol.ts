import mongoose, { model, Schema } from "mongoose";
const registrationSchema: Schema = new Schema({
   studentType: {
      type: String,
   },
   anrolNumber: {
      require: true,
      default: 0,
      type: Number
   },
   studentShift: {
      type: String,
      required: true
   },
   yearStart: {
      type: Number
   },
   yearEnd: {
      type: Number
   },
   groupId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group'
   },
   classId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class'
   },
   feeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Fee'
   },
   studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student'
   },
})

export default model('Registration', registrationSchema)