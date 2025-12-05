import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const navigate = useNavigate();

  const regions = [
    { id: 'bosnia', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { id: 'bonaire', name: 'Bonaire', flag: '🇧🇶' },
  ];

  const handleContinue = () => {
    if (selectedRegion) {
      // Navigate to next page or handle region selection
      console.log('Selected region:', selectedRegion);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between p-4 relative overflow-hidden">
      {/* Background stars/particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-yellow-300 rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
            }}
          />
        ))}
      </div>

      {/* Header with Lantern */}
      <div className="flex flex-col items-center mt-8 z-10">
        {/* Large Lantern */}
        <div className="relative mb-8">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-600 shadow-2xl shadow-yellow-500/50 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 opacity-80"></div>
            <div className="absolute top-0 w-8 h-3 bg-amber-800 rounded-t-lg -translate-y-2"></div>
          </div>
          {/* Lantern glow effect */}
          <div className="absolute inset-0 w-48 h-48 rounded-full bg-yellow-400 blur-3xl opacity-40 animate-pulse"></div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-yellow-300 mb-2 tracking-wider">
          LANTERN
        </h1>
        <h2 className="text-4xl font-bold text-yellow-300 mb-2 tracking-wider">
          FESTIVAL
        </h2>
        <p className="text-yellow-200/60 text-sm tracking-widest">
          เชิญชวน พลีอุทิศ
        </p>
      </div>

      {/* Region Selection Panel */}
      <div className="w-full max-w-md z-10">
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-6 border border-gray-700 shadow-xl">
          <p className="text-gray-300 text-sm mb-4 text-center">
            เลือกภูมิภาคเซิร์ฟเวอร์ของคุณ:
          </p>

          <div className="space-y-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setSelectedRegion(region.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
                  selectedRegion === region.id
                    ? 'border-yellow-400 bg-yellow-400/10'
                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                }`}
              >
                <div className="text-5xl">{region.flag}</div>
                <div className="flex-1 text-left">
                  <p className="text-white font-medium">{region.name}</p>
                </div>
                {selectedRegion === region.id && (
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom lanterns decoration */}
      <div className="flex justify-center gap-12 mb-8 z-10">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-amber-500 shadow-lg shadow-yellow-500/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-2 bg-amber-800 rounded-t"></div>
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-yellow-400 blur-xl opacity-30"></div>
        </div>
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-200 to-amber-500 shadow-lg shadow-yellow-500/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-2 bg-amber-800 rounded-t"></div>
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-full bg-yellow-400 blur-xl opacity-30"></div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="w-full max-w-md mb-8 z-10">
        <button
          onClick={handleContinue}
          disabled={!selectedRegion}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
            selectedRegion
              ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-[1.02]'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          ดำเนินการต่อ
        </button>
        <p className="text-gray-500 text-xs text-center mt-2">
          11.11
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
