import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventHeader } from "./components/Header";
import { EventCard } from "./components/Card";
import {
  fetchEvents,
  selectCountries,
  selectLoading,
  selectError,
} from "@/stores/features/eventSlice";
import type { AppDispatch } from "@/stores";
import { eventService, type CountryInfo } from "@/services/eventService";
import Swal from "sweetalert2";
import { CountryDialog } from "./components/countryDialog";

export const EventPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector(selectCountries);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [country, setCountry] = useState<CountryInfo | undefined>(undefined);

  const handleCountryClick = async (countryCode: string) => {
    try {
      const resp = await eventService.getEvent(countryCode);
      setCountry(resp.data);
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "",
        text: `Cannot fetch country with code: ${countryCode}`,
      });
    }
  };

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-4 md:py-8 overflow-y-auto">
      <EventHeader />
      <EventCard
        countries={countries}
        loading={loading}
        error={error}
        handleCountryClick={handleCountryClick}
      />
      {country && (
        <CountryDialog
          country={country}
          onDialogClose={() => setCountry(undefined)}
        />
      )}
    </div>
  );
};
