import { model, Schema } from "mongoose"
import { IFee } from "../interfaces/InicializeConfigInstitutionInterface"
const feeShema: Schema = new Schema({
   fee: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   updateAT: {
      type: Date,
      default: Date.now
   }
})

export default model<IFee>('propina', feeShema);