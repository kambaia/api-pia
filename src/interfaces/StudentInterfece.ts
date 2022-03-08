import { Document } from "mongoose";
import { ISchool } from "./SchoolInterface";
import { IUniversity } from "./UniversityInterface";
import { IUser, Address, Gender } from "./UserInterface"


export interface IStudent extends Document{
   _id:String;
   active:boolean;
   studentPhoto: string;
   studentCover:string;
   studentName:string;
   studentIdentity:string;
   studentIdentityValiteData:string;
   studentDocumentIdentity:string;
   birthDate: string;
   studetNumber:number;
   studetPhoneNumber?:string;
   userId?: IUser["_id"];
   schoolId?:  ISchool["_id"];
   universityId?: IUniversity["_id"];
   address: Address;
   gender: Gender;
   registerDate:string;
   studentHistory?:IStudentHistory;
   createdAt: Date;
   updatedAt: Date;
}

export interface Iparents extends Document{
	father: string;
	mother:string;
	phoneNumber:string;
	opionalNumber:string
}


export interface IStudentHistory extends Document{
	class: string;
	schoolName:string;
	yearConclusion:string;
	conclusion:string;
	documentCertified:string;
}

