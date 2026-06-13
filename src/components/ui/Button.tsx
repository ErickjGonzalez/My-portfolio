import { cn } from "@/src/lib/utils"; 
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
}

export const Button = ({ children, href, variant = 'primary', className }: ButtonProps) => {
  const baseStyles = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm tracking-wide inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-500/20",
    outline: "border border-purple-500 text-purple-400 hover:bg-purple-500/10",
    ghost: "text-gray-300 hover:text-white hover:bg-white/5"
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
    </Component>
  );
};