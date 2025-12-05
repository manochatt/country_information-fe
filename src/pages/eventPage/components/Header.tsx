import earthImage from "@/assets/earth.png";

export const EventHeader: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl px-4 mb-2">
      {/* Left side - Image */}
      <img
        src={earthImage}
        className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain flex-shrink-0"
        alt="Earth"
      />

      {/* Right side - Content */}
      <div className="flex flex-col justify-center text-center items-center gap-2">
        <h2 className="text-base md:text-lg lg:text-xl font-bold text-yellow-300">
          Countries Information
        </h2>
        <p className="text-[10px] sm:text-xs md:text-sm text-gray-300">
          สำรวจข้อมูลประเทศทั่วโลก
        </p>
        <div className="flex justify-center items-center gap-1 sm:gap-1.5 mt-2">
          <div className="text-[10px] sm:text-[12px] md:text-[11px] px-1 sm:px-1.5 md:px-2 py-0.5 bg-gray-800 text-white rounded border border-gray-600 whitespace-nowrap">
            13พ.ย. - 4ธ.ค.2562
          </div>
          <div className="text-[10px] sm:text-[12px] md:text-[11px] px-1 sm:px-1.5 md:px-2 py-0.5 bg-gray-800 text-white rounded border border-gray-600">
            Event
          </div>
        </div>
      </div>
    </div>
  );
};
