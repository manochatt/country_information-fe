interface InfoCardProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export const InfoCard: React.FC<InfoCardProps> = ({
  label,
  value,
  highlight = false,
}) => {
  return (
    <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <p
        className={`text-sm font-semibold ${
          highlight ? "text-yellow-300" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
};
