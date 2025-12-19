'use client';

import { cn } from '@/lib/utils';

type FlagIconProps = {
  country: 'br' | 'es';
  className?: string;
};

export function FlagIcon({ country, className }: FlagIconProps) {
  if (country === 'br') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 700"
        className={cn('w-6 h-auto rounded-sm', className)}
      >
        <rect width="1000" height="700" fill="#009c3b" />
        <path d="M500 85L890 350L500 615L110 350L500 85Z" fill="#ffdf00" />
        <circle cx="500" cy="350" r="175" fill="#002776" />
      </svg>
    );
  }

  if (country === 'es') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1500 1000"
        className={cn('w-6 h-auto rounded-sm', className)}
      >
        <rect width="1500" height="1000" fill="#c60b1e" />
        <rect y="250" width="1500" height="500" fill="#ffc400" />
      </svg>
    );
  }

  return null;
}
