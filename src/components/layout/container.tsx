import { cn } from '@/lib/utils';
import type React from 'react';

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl', className)}
      {...props}
    />
  );
}
