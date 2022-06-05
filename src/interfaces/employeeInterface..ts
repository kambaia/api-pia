import { Address, IUser } from './UserInterface';
import { Document } from 'mongoose';
import { ISchool } from './SchoolInterface';
import { IUniversity } from './UniversityInterface';
import { Contact, Gender } from './UserInterface';

export interface IEmployee extends Document {
	_id:String;
	firstName: string;
	lastName: string;
	gender?: Gender;
	birthDate: string;
	employeeBiFile:string;
	employeeIdentity:string;
	description: string
	address?: Address;
	contact?:Contact,
	position:string

	userId?: IUser["_id"];
	schoolId?:  ISchool["_id"];
	universityId?: IUniversity["_id"];
	active:boolean;
	createdAt: Date;
	updatedAt: Date;
}