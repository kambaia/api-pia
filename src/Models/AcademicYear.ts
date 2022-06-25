import mongoose, { Model, Schema } from 'mongoose';
import { IAcademicYear } from '../interfaces/InicializeConfigInstitutionInterface';
const academicYearSchema: Schema = new Schema({
    description: { type: String },
    startYear: {
        type: String, required: true,
    },
    endYear: {
        type: String, required: true,
    },
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
}, {
    timestamps: true
})
// Export the model and return your IUser interface
export const AcademicYear: Model<IAcademicYear> = mongoose.models.Class || mongoose.model('AcademicYear', academicYearSchema);
