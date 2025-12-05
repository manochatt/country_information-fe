import earthImage from "@/assets/earth.png";

export const EventHeader: React.FC = () => {
  return (
    <div className="flex h-50 space-between">
      <img src={earthImage} className="w-50 h-50" alt="Earth" />
      <div className="flex flex-col justify-center text-center items-center gap-2">
        <h2 className="text-xl font-bold text-yellow-300">Lantern Festival</h2>
        <p className="text-xs text-gray-300">รำวงวันลอยกระทง บุญจะส่งให้เราสุขใจ</p>
        <div className="flex justify-between w-full gap-2 px-4">
          <button className="text-xs px-3 py-1 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700">
            13พ.ย. - 4ธ.ค.2562
          </button>
          <button className="text-xs px-3 py-1 bg-gray-800 text-white rounded-lg border border-gray-600 hover:bg-gray-700">
            Event
          </button>
        </div>
      </div>
    </div>
  );
};
