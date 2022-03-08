import { Document } from "mongoose";
import { ISchool } from "./SchoolInterface";
export interface IClass extends Document {
   _id:String;
   className?: string;
   createdAt: Date;
	updatedAt: Date;
   yaer?:string;
   schoolId:  ISchool["_id"];
}
export interface IGroup extends Document {
   _id:String;
    group?: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId:  ISchool["_id"];
 }

 export interface IFee extends Document {
   _id:String;
    fee?: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId:  ISchool["_id"];
 }

 export interface ICourse extends Document {
   _id:String;
    couse?: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId:  ISchool["_id"];
 }
 
 export interface IDiscipline extends Document {
   _id:String;
    discipline?: string;
    cigla: string;
    createdAt: Date;
    updatedAt: Date;
    schoolId:  ISchool["_id"];
 }
