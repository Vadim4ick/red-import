import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center outline-none whitespace-nowrap rounded-[2px] text-sm transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-primary-foreground hover:bg-white bg-buttonColor font-medium hover:text-buttonColor ring-buttonColor ring-[1px]",
        secondary:
          "bg-[#ECECEC] border border-[#DCDCDC] hover:bg-white font-light",
        reverseDefault:
          "hover:bg-white bg-white border border-buttonColor hover:bg-buttonColor font-medium hover:text-white text-buttonColor ring-buttonColor",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, addonLeft, addonRight, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    if (!addonLeft && !addonRight) {
      return (
        <Comp
          className={cn(buttonVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <>
        <Comp
          className={cn(buttonVariants({ variant, className }))}
          ref={ref}
          {...props}
        >
          {addonLeft && addonLeft}

          {props.children}

          {addonRight && addonRight}
        </Comp>
      </>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
