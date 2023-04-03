import { IArtists } from './ArtistsInterface';

export interface IAbums {
  title: string;
  releaseYear: string;
  cover: string;
  genre: string;
  reviewed: string;
  description: string;
  tracks: ISingle[];
}

export interface ISingle {
  id: string;
  title: string;
  artwork: string;
  digital: string;
  phisical: string;
  artists?: string;
  artistID?: string;
  album?: string;
  genre: string;
  releaseYear: string;
  copyright: string;
  duration: string;
  urlSingles: string;
  participation?: IArtists[];
}
export interface IVideos {
  id: string;
  title: string;
  url: string;
  Realizador: string;
  director: string;
  production: string;
  recordedIn: string;
}
