import { Document } from 'mongoose';
export interface IUser extends Document {
	_id?: string;
	email: string;
	firstName: string;
	lastName: string;
	password: string,
	gender?: Gender;
	address?: Address;
	createdAt: Date;
	updatedAt: Date;
	roles: Iaccess_level["_id"];
	active: boolean;
}
export enum Gender {
	male = 'male',
	female = 'female',
	undisclosed = 'undisclosed'
}

export interface Address extends Document {
	street: string;
	city: string;
	postCode: string;
}
export interface Iaccess_level extends Document {
	livel: number;
	role: string;
	type: string;
	createdAt: Date;
	updatedAt: Date;
}
