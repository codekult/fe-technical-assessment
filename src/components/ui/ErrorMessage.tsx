interface ErrorMessageProps {
    message: string;
    onRetry?: () => void;
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 p-4">
            <p className="text-sm text-red-500">Error: {message}</p>
            {onRetry && (
                <button
                    onClick={onRetry}
                    className="px-3 py-1 text-sm border border-black-alpha-8 rounded-md hover:bg-black-alpha-4 cursor-pointer"
                >
                    Retry
                </button>
            )}
        </div>
    );
}
