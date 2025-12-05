import type { CountryInfo } from "@/services/eventService";
import { InfoCard } from "./InfoCard";

interface CountryDialogProps {
  country: CountryInfo;
  onDialogClose: () => void;
}

export const CountryDialog: React.FC<CountryDialogProps> = ({
  country,
  onDialogClose,
}) => {
  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/70 z-40" onClick={onDialogClose} />

      {/* Dialog */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Dialog Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-yellow-300">
              {country.name}
            </h2>
          </div>

          {/* Dialog Content */}
          <div className="p-4 sm:p-6">
            {/* Flag */}
            <div className="flex justify-center mb-6">
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-32 h-32 sm:w-40 sm:h-40 object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Country Information - Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard label="Official Name" value={country.official_name} />
              <InfoCard label="Capital" value={country.capital} />
              <InfoCard label="Region" value={country.region} />
              <InfoCard label="Subregion" value={country.subregion} />
              <InfoCard
                label="Population"
                value={country.population.toLocaleString()}
                highlight
              />
              <InfoCard
                label="Population Percent"
                value={`${country.population_percent.toLocaleString()}%`}
                highlight
              />
              <InfoCard
                label="Area"
                value={`${country.area.toLocaleString()} km²`}
                highlight
              />
              <InfoCard
                label="Languages"
                value={country.languages.join(", ")}
              />
            </div>
          </div>

          {/* Dialog Actions */}
          <div className="flex justify-end p-4 sm:p-6 border-t border-gray-700 sticky bottom-0 bg-gray-900">
            <button
              onClick={onDialogClose}
              className="px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
