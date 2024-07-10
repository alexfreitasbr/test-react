export type PlanetType = {
  name: string,
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: string[],
  gravity: string,
  orbital_period: string,
  population: string,
  residents: string[],
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string,
} 

export type PeopleType = {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: string[],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string,
} 

export type  ProfileDataType = {
  count:number,
  next: number | null,
  previous: number | null,
  results:PlanetType[] | PeopleType[] 
}  

export type  GetDataType = {
  loading: boolean,
  error: boolean,
  data: ProfileDataType | PlanetType | null,
  empty: boolean,
}  


