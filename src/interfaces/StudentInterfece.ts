import { Document } from "mongoose";
import {
  IAcademicYear
} from "./InicializeConfigInstitutionInterface";
import { ISchool } from "./SchoolInterface";
import { IUniversity } from "./UniversityInterface";
import { IUser, Address, Gender } from "./UserInterface";

export interface IStudent extends Document {
  _id: String;
  profile?: {
    thumbnail: string;
    name: string;
  };
  firstName: string;
  lastName: string;
  studentIdentity: string;
  studentIdentityValiteData: string;
  studentDocumentIdentity: string;
  birthDate: string;
  studetNumber: number;
  studetPhoneNumber?: string;
  userId?: IUser["_id"];
  schoolId?: ISchool["_id"];
  universityId?: IUniversity["_id"];
  address: Address;
  gender: Gender;
  parents: Iparents;
  deficiency:string;
  studentHistory?: IStudentHistory;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IStudentEnrollment extends Document {
  studentType: string;
  anrolNumber?: string;
  studentHistory?: IStudentHistory["_id"];
  situation: string;
  academicYearId: IAcademicYear["_id"];
  createdAt: Date;
  updatedAt: Date;
}

export interface Iparents extends Document {
  father: string;
  mother: string;
  phoneNumber: string;
  opionalNumber: string;
}

export interface IStudentHistory extends Document {
  class: string;
  schoolName: string;
  yearConclusion: string;
  conclusion: string;
  documentCertified: string;
}
