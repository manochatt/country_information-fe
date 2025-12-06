import { Spinner } from "./Spinner";

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  message,
}) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <Spinner size="lg" />
      {message && (
        <p className="mt-4 text-white text-sm sm:text-base">{message}</p>
      )}
    </div>
  );
};
