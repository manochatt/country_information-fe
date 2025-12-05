import { listCountries } from "@/apis/countryApi";

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
    const response = await listCountries();
    return response as ListEventResponse;
  },
};
