import { Document } from "mongoose";
export interface IClass extends Document {
   _id:String;
   classMat?: string;
   createdAt: Date;
	updatedAt: Date;
   yaer?:string
}
export interface IGroup extends Document {
   _id:String;
    group?: string;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface IFee extends Document {
   _id:String;
    fee?: string;
    createdAt: Date;
    updatedAt: Date;
 }

 export interface ICourse extends Document {
   _id:String;
    couse?: string;
    createdAt: Date;
    updatedAt: Date;
 }
 
 export interface IDiscipline extends Document {
   _id:String;
    discipline?: string;
    cigla: string;
    createdAt: Date;
    updatedAt: Date;
 }
