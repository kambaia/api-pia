import { Document } from "mongoose";
import { ISchool } from "./SchoolInterface";

export interface IAcademicYear extends Document {
   _id: String;
   startYear?: string;
   endYear: string;
   createdAt: Date;
   status: boolean;
   description: string
   updatedAt: Date;
   schoolId: ISchool["_id"];
}

export interface IClass extends Document {
   _id: String;
   className?: string;
   status: boolean;
   typeClass:string;
   evaluation:number;
   createdAt: Date;
   updatedAt: Date;
   yaer?: string;
   feeId: IFee["_id"];
   schoolId: ISchool["_id"];
   academicYearId: IAcademicYear["_id"];
}
export interface IGroup extends Document {
   _id: String;
   group?: string;
   createdAt: Date;
   status: boolean;
   updatedAt: Date;
   schoolId: ISchool["_id"];
   academicYearId: IAcademicYear["_id"];

}

export interface IFee extends Document {
   _id: String;
   fee: string;
   year: string;
   createdAt: Date;
   updatedAt: Date;
   schoolId: ISchool["_id"];
   academicYearId: IAcademicYear["_id"];
   status: boolean;
}

export interface ICourse extends Document {
   _id: String;
   couse?: string;
   typeCourse:string;
   createdAt: Date;
   updatedAt: Date;
   schoolId: ISchool["_id"];
   academicYearId: IAcademicYear["_id"];
   status: boolean;
}

export interface IDiscipline extends Document {
   _id: String;
   discipline?: string;
   cigla: string;
 
   schoolId: ISchool["_id"];
   academicYearId: IAcademicYear["_id"];
   status: boolean;
   createdAt: Date;
   updatedAt: Date;
}
export interface IRoomMembers extends Document {
   _id: String;
   disciplines?:Array<string>;
   cigla: string;
   createdAt: Date;
   updatedAt: Date;
   schoolId: ISchool["_id"];
   academicYearId: IAcademicYear["_id"];
   status: boolean;
}


