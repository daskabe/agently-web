import { Slot } from '@radix-ui/react-slot';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

export function Button({
  asChild = false,
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn('button', `button--${variant}`, className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
