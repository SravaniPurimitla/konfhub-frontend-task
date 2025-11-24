import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  href, 
  className = '',
  ...props 
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-md',
    ghost: 'hover:bg-gray-100 text-gray-700'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };
  
  const Component = href ? 'a' : 'button';
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};
  const buttonProps = onClick ? { onClick } : {};
  
  return (
    <Component 
      className={`
        ${sizes[size]} 
        ${variants[variant]} 
        rounded-lg font-semibold transition-all duration-200 
        inline-flex items-center justify-center gap-2
        ${className}
      `}
      {...linkProps}
      {...buttonProps}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;