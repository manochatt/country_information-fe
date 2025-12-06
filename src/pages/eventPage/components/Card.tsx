import { useState, useMemo } from "react";
import type { Country } from "@/services/eventService";

interface EventCardProps {
  countries: Country[];
  error: string | null;
  handleCountryClick: (countryCode: string) => Promise<void>;
}

const ITEMS_PER_PAGE = 15;

export const EventCard: React.FC<EventCardProps> = ({
  countries,
  error,
  handleCountryClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate pagination
  const totalPages = Math.ceil((countries?.length || 0) / ITEMS_PER_PAGE);
  const paginatedCountries = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return countries?.slice(startIndex, endIndex) || [];
  }, [countries, currentPage]);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl px-2 sm:px-4 mb-8">
      {/* Title Card - Positioned at center top */}
      <div className="flex justify-center relative z-10 -mb-4">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 px-4 sm:px-6 py-2 sm:py-3 shadow-xl">
          <p className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
            รายละเอียดกิจกรรม
          </p>
        </div>
      </div>

      {/* Main Card Body */}
      <div className="bg-gray-900/90 border border-gray-700 shadow-2xl p-3 sm:p-4 md:p-6 pt-8 sm:pt-10 text-center">
        <p className="mb-3 sm:mb-4 text-gray-300 text-xs sm:text-sm">
          สะสมเหรียญจากเควสประจำวันที่กำหนดเพื่อแลกรับไอเทม
        </p>

        {/* Error State */}
        {error && (
          <div className="text-red-400 text-xs sm:text-sm py-4">
            <p>Error: {error}</p>
          </div>
        )}

        {/* Countries Grid */}
        {!error && (
          <>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3 mb-4 sm:mb-6">
              {paginatedCountries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => handleCountryClick(country.alpha2_code)}
                  className="flex flex-col items-center justify-center gap-1 p-1.5 sm:p-2 rounded-lg sm:rounded-xl border-2 border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/70 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 cursor-pointer aspect-square"
                >
                  {/* Flag Image */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* Alpha2 Code */}
                  <p className="text-yellow-400 font-bold text-[8px] sm:text-[10px] md:text-xs">
                    {country.alpha2_code}
                  </p>

                  {/* Country Name */}
                  <p className="text-white font-medium text-[7px] sm:text-[9px] md:text-[10px] text-center leading-tight line-clamp-2">
                    {country.name}
                  </p>
                </button>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 flex-wrap">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                    currentPage === 1
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  }`}
                >
                  <span className="hidden sm:inline">← Previous</span>
                  <span className="sm:hidden">←</span>
                </button>

                <div className="text-white text-xs sm:text-sm">
                  <span className="font-bold text-yellow-400">
                    {currentPage}
                  </span>
                  {" / "}
                  <span>{totalPages}</span>
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
                    currentPage === totalPages
                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                      : "bg-gray-800 text-white border border-gray-600 hover:bg-gray-700"
                  }`}
                >
                  <span className="hidden sm:inline">Next →</span>
                  <span className="sm:hidden">→</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
