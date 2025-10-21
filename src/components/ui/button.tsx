// src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Build the className from CSS Modules
    const buttonClassName = [
      styles.button,
      styles[variant], // e.g., styles.default or styles.outline
      styles[`size_${size}`], // e.g., styles.size_default or styles.size_lg
      className
    ].filter(Boolean).join(' ');

    return (
      <Comp
        className={buttonClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }