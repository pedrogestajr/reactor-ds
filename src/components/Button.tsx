import { ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  
  return(
    <Comp className={clsx(
        "py-3 px-3 bg-cyan-400 text-neutral-900 text-md font-semibold w-full rounded font-sans hover:bg-cyan-200 transition-colors",
      )}
    >
      {children}
    </Comp>
  )
}