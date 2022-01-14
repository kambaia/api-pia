import { Address, IUser } from "./UserInterface"


export interface IUniversity extends Document {
	_id?: string;
	universityPhoto: string;
	universityCover: string;
	universityName: string;
	universityIdentity: string;
	birthDateFundation: string;
	adress: Address;
	universityRepresentative: IUser["_id"]
	createdAt: Date;
	updatedAt: Date;
}


