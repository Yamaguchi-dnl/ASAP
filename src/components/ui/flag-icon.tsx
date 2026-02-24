'use client';

import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

type FlagIconProps = {
  country: 'br' | 'es' | 'ar' | 'mx' | 'co' | 'world';
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

  if (country === 'ar') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 500"
        className={cn('w-6 h-auto rounded-sm', className)}
      >
        <rect width="800" height="500" fill="#74ACDF" />
        <rect y="166.6" width="800" height="166.6" fill="#FFFFFF" />
      </svg>
    );
  }

  if (country === 'mx') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 980 560"
        className={cn('w-6 h-auto rounded-sm', className)}
      >
        <rect width="326.6" height="560" fill="#006847" />
        <rect x="326.6" width="326.6" height="560" fill="#FFFFFF" />
        <rect x="653.2" width="326.6" height="560" fill="#CE1126" />
      </svg>
    );
  }

  if (country === 'co') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 900 600"
        className={cn('w-6 h-auto rounded-sm', className)}
      >
        <rect width="900" height="300" fill="#FCD116" />
        <rect y="300" width="900" height="150" fill="#003893" />
        <rect y="450" width="900" height="150" fill="#CE1126" />
      </svg>
    );
  }

  if (country === 'world') {
    return <Globe className={cn('w-6 h-6 text-primary-foreground/70', className)} />;
  }

  return null;
}
