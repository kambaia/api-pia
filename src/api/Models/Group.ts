import mongoose, { model, Schema } from 'mongoose';
import {IGroup } from '../../interfaces/InicializeConfigInstitutionInterface';
const  groupSchema: Schema = new Schema({
   goup: { type: String, required: true },
   mix: { type:Number, default: 0},
   min: { type:Number, default: 0},

   classId: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
   course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
   studentShift: { type: mongoose.Schema.Types.ObjectId, ref: "Shift" },
   feeId: { type: mongoose.Schema.Types.ObjectId, ref: "Fee" },
   disciplines: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Discipline"
      }
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher"
      }
    ],

   schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
   academicYearId: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
   status: {
      type: Boolean,
   },
   }, {
   timestamps: true
})

export default model<IGroup>('group', groupSchema);