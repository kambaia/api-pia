import { Document } from "mongoose";
import { Address, IUser } from "./UserInterface";
export interface IUniversity extends Document {
	_id?: string;
	universityPhoto: string;
	universityCover: string;
	universityName: string;
	universityIdentity: string;
	fundationDate: string;
	adress: Address;
	universityRepresentative: IUser["_id"]
	createdAt: Date;
	updatedAt: Date;
}


