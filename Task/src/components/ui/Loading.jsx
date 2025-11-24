import React from 'react';

export const Loading = ({ size = 'default', fullscreen = true }) => {
  const sizes = {
    sm: 'h-8 w-8 border-2',
    default: 'h-16 w-16 border-4',
    lg: 'h-24 w-24 border-4'
  };
  
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className={`
        animate-spin rounded-full border-t-blue-600 border-b-blue-600 
        border-l-transparent border-r-transparent
        ${sizes[size]}
      `} />
      <p className="text-gray-600 font-medium">Loading event details...</p>
    </div>
  );
  
  if (fullscreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {content}
      </div>
    );
  }
  
  return content;
};

export default Loading;