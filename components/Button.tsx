
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-xs";
  
  const variants = {
    primary: "bg-[#f83e02] text-white hover:bg-black shadow-lg hover:shadow-xl focus:ring-[#f83e02]",
    secondary: "bg-black text-white hover:bg-[#f83e02] shadow-md focus:ring-black",
    outline: "border-2 border-[#f83e02] text-[#f83e02] hover:bg-[#f83e02] hover:text-white shadow-sm",
    ghost: "text-slate-600 hover:bg-slate-100 focus:ring-slate-300",
  };

  const sizes = {
    sm: "px-6 py-2",
    md: "px-10 py-4",
    lg: "px-14 py-5",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
