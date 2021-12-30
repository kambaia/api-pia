import { Address, IUser } from "./UserInterface"

export interface ISchool extends Document{
	_id?: string;
   schoolPhoto: string;
   schoolCover:string;
   schoolName:string;
   schoolIdentity:string;
   birthDateFundation: string;
   adress: Address;
   shoolRepresentative:IUser["_id"]
   createdAt: Date;
   updatedAt: Date;
}