import mongoose, { Model, Schema } from 'mongoose';
import { Iwaillet } from '../interfaces/wailletInterface';
const WailletSchema: Schema = new Schema({
    userIba: { type: String },
    userReference: {
        type: Number, required: true,
    },
    countNumber: {
        type: Number, required: true,
    },
    value: {
        type: Number, required: true,
    },
    userCodigo: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
}, {
    timestamps: true
})
// Export the model and return your IUser interface
export const Waillet: Model<Iwaillet> = mongoose.models.Waillet || mongoose.model('Waillet', WailletSchema);
