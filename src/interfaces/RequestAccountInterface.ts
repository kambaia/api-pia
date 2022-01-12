import { IStudent } from "./StudentInterfece";
export interface IRequestAccount extends Document{
   _id:String;
   studyNumber?:string;
   schoolName:string;
   identityNumber:string
   createdAt: Date;
   updatedAt: Date;
   idSchools:string;
   idStudent:IStudent["_id"]
   ,
}
