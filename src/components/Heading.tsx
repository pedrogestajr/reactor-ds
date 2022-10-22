import { ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx';

export interface HeadingProps {
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  asChild?: boolean;
}

export function Heading({size = 'md', children, asChild}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2';
  
  return(
    <Comp className={clsx(
        "text-neutral-50 font-sans",
        {
          'text-3xl': size === 'sm',
          'text-4xl': size === 'md',
          'text-5xl': size === 'lg',
        }
      )}
    >
      {children}
    </Comp>
  )
}