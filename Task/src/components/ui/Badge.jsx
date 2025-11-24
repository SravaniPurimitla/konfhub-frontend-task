import React from 'react';

export const Badge = ({ children, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800 border-blue-200',
    green: 'bg-green-100 text-green-800 border-green-200',
    purple: 'bg-purple-100 text-purple-800 border-purple-200',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    gray: 'bg-gray-100 text-gray-800 border-gray-200'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClasses[color] || colorClasses.blue}`}>
      {children}
    </span>
  );
};

export default Badge;