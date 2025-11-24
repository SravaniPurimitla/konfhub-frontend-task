import React from 'react';
import { AlertCircle } from 'lucide-react';
import Button from './Button';

export const ErrorMessage = ({ 
  message, 
  onRetry,
  fullscreen = true 
}) => {
  const content = (
    <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
      <div className="flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-red-800 font-semibold text-lg mb-2">
            Oops! Something went wrong
          </h3>
          <p className="text-red-700 mb-4">{message}</p>
          {onRetry && (
            <Button variant="danger" size="sm" onClick={onRetry}>
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
  
  if (fullscreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
        {content}
      </div>
    );
  }
  
  return content;
};

export default ErrorMessage;