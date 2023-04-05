import { IAbums, ISingle, IVideos } from './AlbumsInterface';
import { IArtists } from './ArtistsInterface';

export interface IUser extends Document {
  id: String | number;
  email: String;
  profileName: String;
  urlProfile: string;
  userName: String;
  firstName: String;
  surname: String;
  fullName: String;
  password: String;
  phoneNumber: String;
  active: boolean;
  status: boolean;
  banned: boolean;
  userBirth: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: Number | string;
  artist?: IArtists[];
  abums?: IAbums[];
  music?: ISingle[];
  videoClip?: IVideos[];
}

export interface IUserRegister {
  active: boolean;
  banned: boolean;
  email: string;
  firstName: string;
  fullName: string;
  password: string;
  profileName: string;
  surname: string;
  urlProfile: string;
  userBirth: string;
  userName: string;
  status: boolean;
}

export interface Address extends Document {
  street: string;
  city: string;
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
  id: string;
  role: string;
  type: string;
}
