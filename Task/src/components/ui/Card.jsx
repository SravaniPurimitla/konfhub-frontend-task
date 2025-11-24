import React from 'react';

export const Card = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'default',
  ...props 
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    default: 'p-6',
    lg: 'p-8'
  };
  
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md 
        ${paddings[padding]}
        ${hover ? 'hover:shadow-xl transition-shadow duration-300' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;