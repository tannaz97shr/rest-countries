export interface IDropdownOption {
  value: string;
  name: string;
}

export interface ICountry {
  name: {
    common: string;
    official: string;
  };
  region: string;
  population: number;
  capital: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
}
