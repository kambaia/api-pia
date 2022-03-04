import { Document } from 'mongoose';
export interface IUser extends Document {
	_id:String;
	email: string;
	userName:string,
	firstName: string;
	lastName: string;
	password?: string;
	gender?: Gender;
	address?: Address;
	phoneNumber?: string;
	studyNumber?:string;
	createdAt: Date;
	updatedAt: Date;
	roles: Iaccess_level["_id"];
	refreshToken?: IRefreshToken["_id"];
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
