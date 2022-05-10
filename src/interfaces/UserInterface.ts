import { Document } from 'mongoose';
import { ISchool } from './SchoolInterface';
export interface IUser extends Document {
	_id:String;
	profile:string;
	email: string;
	userName:string,
	firstName: string;
	lastName: string;
	password?: string;
	gender?: Gender;
	address?: Address;
	contact?:Contact
	phoneNumber?: string;
	studentNumber?:string;
	createdAt: Date;
	updatedAt: Date;
	roles: Iaccess_level["_id"];
	refreshToken?: IRefreshToken["_id"];
	schoolId?:  ISchool["_id"];
	active:boolean;
}
export enum Gender {
	masculino = 'Masculino',
	femenino = 'Femenino',
	undisclosed = 'undisclosed'
}

export interface Address extends Document {
	street: string;
	city: string;
	postCode: string;
	province:string;
    country: string;
}
export interface Contact extends Document {
	unitel:string;
	movicel:string;
	fixe:string;
}
export interface Iaccess_level extends Document {
	_id: string;
	livel: number;
	role:string;
    type:string;
	createdAt: Date;
	updatedAt: Date;
}

export interface IRefreshToken extends Document{
	_id: string;
	expireIn: number;
	userId: IUser["_id"]
}
