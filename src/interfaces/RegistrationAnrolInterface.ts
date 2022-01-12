import { IClass, IFee, IGroup } from "./InicializeConfigInstitutionInterface"
import { IUser } from "./UserInterface"
export interface IRegistrationAnrol extends Document{
   studentType: string;
   studentShift:string;
   anrolNumber?:string;
   classId: IClass["_id"];
   groupId: IGroup["_id"];
   feeId: IFee["_id"];
   userId: IUser["_id"];
   yearStart:number;
   yearEnd:number;
   createdAt: Date;
   updatedAt: Date;
}
