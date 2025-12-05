import { EventHeader } from "./components/Header";
import { EventCard } from "./components/Card";

export const EventPage: React.FC = () => {
  return (
    <div className="bg-black h-screen w-full flex flex-col justify-center items-center">
      <EventHeader />
      <EventCard />
    </div>
  );
};
