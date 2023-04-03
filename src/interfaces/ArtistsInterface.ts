import { IVideos } from './AlbumsInterface';

export interface ISocialMidia {
  facebook: string;
  twitter: string;
  whatsapp: string;
  instagram: string;
  spotify?: string;
  appleMusic?: string;
}

export interface IArtists {
  id: string;
  name: string;
  bio?: string;
  profile_picture: string;
  cover_photo?: string;
  videoclips?: IVideos[];
  ISocialMidia?: ISocialMidia[];
}
