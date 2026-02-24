import React from "react";
import { cn } from "@/app/utils/cn";

export default function Button({
  children,
  className = "",
  color = {
    background: "",
    text: "",
  },
  icon = {
    icon: null,
    position: "left",
    animate: false,
  },
  size = "default",
  type = "primary",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  color?: {
    background?: string;
    text?: string;
  };
  icon?: {
    icon: React.ReactNode;
    position?: "left" | "right";
    animate?: boolean;
  };
  size?: "small" | "default";
  type?: "primary" | "secondary" | "text";
}) {
  const buttonStyles = {
    base: "group transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap",
    primary: "rounded-full hover:opacity-90",
    secondary: "rounded-full border-[0.5px] hover:bg-white/10",
    text: "px-0 py-1",
  };

  const buttonSizes = {
    small: "px-4 py-1.5 text-sm font-medium",
    default: "px-6 py-3.5 text-sm font-bold",
  };
  return (
    <button
      className={cn(
        className,
        buttonStyles.base,
        buttonStyles[type],
        size === "small" && type !== "text" && buttonSizes.small,
        size === "default" && buttonSizes.default,
      )}
      style={
        type === "primary"
          ? { backgroundColor: color?.background, color: color?.text }
          : type === "secondary"
            ? { borderColor: color?.background, color: color?.text }
            : { color: color?.text }
      }
      {...props}
    >
      {(icon?.position === "left" || !icon?.position) && icon.icon && (
        <div
          className={cn(
            icon.animate &&
              "group-hover:-translate-x-1 transition-all duration-300",
          )}
        >
          {icon.icon}
        </div>
      )}
      {children}
      {icon?.position === "right" && icon.icon && (
        <div
          className={cn(
            icon.animate &&
              "group-hover:translate-x-1 transition-all duration-300",
          )}
        >
          {icon.icon}
        </div>
      )}
    </button>
  );
}
