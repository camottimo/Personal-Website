import React from 'react';

interface CompanyLogoProps {
  companyName: string;
  className?: string;
}

export default function CompanyLogo({ companyName, className = "" }: CompanyLogoProps) {
  // Get the initials of the company name
  const initials = companyName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`flex items-center justify-center font-semibold text-xl text-blue-600 ${className}`}>
      {initials}
    </div>
  );
} 