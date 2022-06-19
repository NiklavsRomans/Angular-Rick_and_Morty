export interface Characters {
  info: CharacterInfo;
  results: CharacterResults[];
}

export interface CharacterInfo {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
}

export interface CharacterResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterOrigin {
  name: string;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}
