import { useEffect } from "react";
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

export const EventPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countries = useSelector(selectCountries);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="bg-black min-h-screen w-full flex flex-col items-center py-4 md:py-8 overflow-y-auto">
      <EventHeader />
      <EventCard countries={countries} loading={loading} error={error} />
    </div>
  );
};
