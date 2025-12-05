interface Country {
  id: string;
  name: string;
  flag: string;
}

export const EventCard = () => {
  const countries: Country[] = [
    { id: "1", name: "Bosnia and Herzegovina", flag: "🇧🇦" },
    { id: "2", name: "Bonaire", flag: "🇧🇶" },
    { id: "3", name: "Brazil", flag: "🇧🇷" },
    { id: "4", name: "Brunei", flag: "🇧🇳" },
    { id: "5", name: "Bulgaria", flag: "🇧🇬" },
  ];

  const handleCountryClick = (countryName: string) => {
    console.log(`Clicked: ${countryName}`);
    // Add your navigation or action logic here
  };

  return (
    <div className="relative w-full max-w-md px-4 mt-8">
      {/* Title Card - Positioned at center top */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-10">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 px-6 py-3 shadow-xl">
          <p className="text-white font-semibold text-sm whitespace-nowrap">
            รายละเอียดกิจกรรม
          </p>
        </div>
      </div>

      {/* Main Card Body */}
      <div className="bg-gray-900/90 border border-gray-700 shadow-2xl p-6 text-center">
        <p className="mb-4">
          สะสมเหรียญจากเควสประจำวันที่กำหนดเพื่อแลกรับไอเทม
        </p>
        <div className="grid grid-cols-3 gap-3">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => handleCountryClick(country.name)}
              className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl border-2 border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/70 hover:scale-[1.05] active:scale-[0.95] transition-all duration-200 cursor-pointer aspect-square"
            >
              {/* Flag */}
              <div className="text-3xl">{country.flag}</div>

              {/* Country Name */}
              <p className="text-white font-medium text-xs text-center leading-tight">
                {country.name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
