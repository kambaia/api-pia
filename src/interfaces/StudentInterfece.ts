import { ISchool } from "./SchoolInterface";
import { IUniversity } from "./UniversityInterface";
import { IUser } from "./UserInterface"


export interface IStudent extends Document{
   studentPhoto: string;
   studentCover:string;
   studentName:string;
   studentIdentity:string;
   birthDate: string;
   studetNumber:number;
   userId: IUser["_id"];
   schoolId?:  ISchool["_id"];
   universityId?: IUniversity["_id"];
   createdAt: Date;
   updatedAt: Date;
}
