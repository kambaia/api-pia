import mongoose, { Model, Schema } from 'mongoose';
import { IAcademicYear } from '../../interfaces/InicializeConfigInstitutionInterface';
const academicYearSchema: Schema = new Schema({
    description: { type: String },
    startYear: {
        type: Number, required: true,
    },
    endYear: {
        type: Number, required: true,
    },
    schoolId: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
}, {
    timestamps: true
})
// Export the model and return your IUser interface
export const AcademicYear: Model<IAcademicYear> = mongoose.models.AcademicYear || mongoose.model('AcademicYear', academicYearSchema);
