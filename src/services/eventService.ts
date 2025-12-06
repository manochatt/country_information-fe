import { getCountryByCode, listCountries } from "@/apis/countryApi";

export interface CountryInfo {
  id: number;
  name: string;
  official_name: string;
  alpha2_code: string;
  alpha3_code: string;
  numeric_code: string;
  capital: string;
  region: string;
  subregion: string;
  area: number;
  population: number;
  population_percent: number;
  flag: string;
  flag_svg: string;
  languages: string[];
}

export interface GetEventResponse {
  data: CountryInfo;
}

export interface Country {
  id: number;
  name: string;
  alpha2_code: string;
  alpha3_code: string;
  capital: string;
  region: string;
  population: number;
  population_percent: number;
  flag: string;
}

export interface ListEventResponse {
  data: Country[];
}

export const eventService = {
  listEvent: async (): Promise<ListEventResponse> => {
    try {
      const response = await listCountries();
      return response as ListEventResponse;
    } catch (error) {
      throw error;
    }
  },
  getEvent: async (code: string): Promise<GetEventResponse> => {
    try {
      const response = await getCountryByCode(code);
      return response as GetEventResponse;
    } catch (error) {
      throw error;
    }
  },
};
