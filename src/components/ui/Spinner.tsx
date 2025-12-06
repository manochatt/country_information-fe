interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeStyles = {
    sm: "h-6 w-6",
    md: "h-10 w-10 sm:h-12 sm:w-12",
    lg: "h-16 w-16",
  };

  return (
    <div className="flex justify-center items-center py-8">
      <div
        className={`animate-spin rounded-full border-b-2 ${sizeStyles[size]} ${className}`}
      ></div>
    </div>
  );
};
