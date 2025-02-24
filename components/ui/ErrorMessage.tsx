import React from 'react';
import Link from 'next/link';

interface ErrorMessageProps {
  title?: string;
  message?: string;
  code?: string | number;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = "Something went wrong",
  message = "We're having trouble loading this content. Please try again later.",
  code,
  action = {
    label: "Go back home",
    href: "/"
  }
}) => {
  return (
    <div className="min-h-[400px] flex items-center justify-center px-4">
      <div className="text-center">
        {code && (
          <p className="text-6xl font-bold text-primary mb-4">
            {code}
          </p>
        )}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {title}
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          {message}
        </p>
        {action && (
          action.href ? (
            <Link
              href={action.href}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {action.label}
            </Link>
          ) : (
            <button
              onClick={action.onClick}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {action.label}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ErrorMessage; 