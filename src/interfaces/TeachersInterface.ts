import { Address, IUser } from './UserInterface';
import { Document } from 'mongoose';
import { ISchool } from './SchoolInterface';
import { IUniversity } from './UniversityInterface';
import { Contact, Gender } from './UserInterface';

export interface Iteacher extends Document {
	_id:String;
    profile?: {
		thumbnail:string, name:string
	};
	firstName: string;
	lastName: string;
	gender?: Gender;
	birthDate: string;
	teacherBiFile:string;
	teacherIdentity:string;
	description: string
	address?: Address;
	contact?:Contact,
	userId?: IUser["_id"];
	schoolId?:  ISchool["_id"];
	universityId?: IUniversity["_id"];
	active:boolean;
	createdAt: Date;
	updatedAt: Date;
}