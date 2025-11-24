import React from 'react';

export const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`
    text-3xl md:text-4xl font-bold text-gray-800 mb-6 
    border-b-4 border-blue-600 pb-2 inline-block
    ${className}
  `}>
    {children}
  </h2>
);

export default SectionTitle;