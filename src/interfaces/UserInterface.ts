export interface IUser extends Document {
  id: String | number;
  profile?: {
    thumbnail: string;
    name: string;
  };
  email: string;
  userName: string;
  firstName: string;
  surname: string;
  fullName: string;
  password?: string;
  phoneNumber?: string;
  active: boolean;
  status: boolean;
  banned: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export enum Gender {
  masculino = 'Masculino',
  femenino = 'Femenino',
  undisclosed = 'undisclosed',
}

export interface Address extends Document {
  street: string;
  city: string;
  postCode: string;
  country: string;
  province: string;
  county: string;
  neighborhood: string;
}
export interface Contact extends Document {
  unitel: string;
  movicel: string;
  fixe: string;
}
export interface Iaccess_level extends Document {
  _id: string;
  livel: number;
  role: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
