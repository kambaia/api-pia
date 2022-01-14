import { Address, IUser } from "./UserInterface"

export interface IParents extends Document {
	_id?: string;
	parentPhoto: string;
	parentCover: string;
	parentName: string;
	parentIdentity: string;
	birthDate: string;
	students: Array<IUser["_id"]>;
	parentRepresentative: IUser["_id"];
	adress: Address;
	createdAt: Date;
	updatedAt: Date;
}