import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  loading = false,
  fullWidth = false,
  rounded = false,
  className,
  disabled,
  ...props
}) => {
  // Base style
  const baseStyles =
    'font-semibold inline-flex items-center justify-center transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed active:scale-95';

  // Variants
  const variantStyles = {
    primary: 'bg-eco-green text-white shadow-md hover:bg-eco-green-dark hover:shadow-lg focus:ring-eco-green',
    secondary: 'bg-eco-blue text-white shadow-md hover:bg-eco-blue-dark hover:shadow-lg focus:ring-eco-blue',
    outline: 'border border-ash-gray text-slate-700 bg-transparent hover:bg-slate-50 focus:ring-eco-green',
    gradient:
      'bg-gradient-to-r from-eco-green to-eco-blue text-white shadow-lg hover:opacity-90 focus:ring-eco-green',
  };

  // Sizes
  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const mergedClasses = twMerge(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    rounded ? 'rounded-full' : 'rounded-lg',
    className
  );

  return (
    <button
      className={mergedClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
          Loading...
        </span>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
