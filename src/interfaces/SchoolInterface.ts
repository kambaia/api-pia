import { Document } from "mongoose";
import { Address, IUser } from "./UserInterface"
export interface ISchool extends Document{
   _id:String;
   schoolPhoto: string;
   schoolCover:string;
   schoolName:string;
   schoolIdentity:string;
   fundationDate: string;
   adress: Address;
   shoolRepresentative:IUser["_id"];
   definitionsSchool: IdefinitionsSchool
   createdAt: Date;
   updatedAt: Date;
}

export interface IdefinitionsSchool extends Document{
	colorSchool:string
}