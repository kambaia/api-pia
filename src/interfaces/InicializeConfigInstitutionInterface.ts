import { Document } from "mongoose";
import { ISchool } from "./SchoolInterface";
import { Iteacher } from "./TeachersInterface";

export interface IAcademicYear extends Document {
  _id: String;
  startYear?: string;
  endYear: string;
  description: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
  schoolId: ISchool["_id"];
}

export interface IClass extends Document {
  _id: String;
  className?: string;
  yaer?: string;
  status: boolean;
  typeClass: string;
  evaluation: number;
  feeId: IFee["_id"];
  schoolId: ISchool["_id"];
  academicYearId: IAcademicYear["_id"];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICourse extends Document {
  _id: String;
  couse?: string;
  initials: string;
  typeCourse: string;
  createdAt: Date;
  updatedAt: Date;
  schoolId: ISchool["_id"];
  academicYearId: IAcademicYear["_id"];
  status: boolean;
}
export interface IGroup extends Document {
  _id: String;
  group: string;
  max: number;
  min: number;
  classId?: IClass["_id"];
  course?: ICourse["_id"];
  feeId?: IFee["_id"];
  studentShift?: IShift["_id"];
  disciplines?: Array<IDiscipline["_id"]>;
  teachers?: Array<Iteacher["_id"]>;
  schoolId: ISchool["_id"];
  academicYearId: IAcademicYear["_id"];
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
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
  disciplines?: Array<IDiscipline["_id"]>;
  cigla: string;
  createdAt: Date;
  updatedAt: Date;
  schoolId: ISchool["_id"];
  academicYearId: IAcademicYear["_id"];
  status: boolean;
}

export interface IShift extends Document {
  _id: String;
  shift?: string;
  startTime: string;
  endTime: string;
  createdAt: Date;
  updatedAt: Date;
  schoolId: ISchool["_id"];
  academicYearId: IAcademicYear["_id"];
  status: boolean;
}
