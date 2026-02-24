import React from "react";
import { cn } from "@/app/utils/cn";

export default function Button({
  children,
  className = "",
  color = {
    background: "#FFFFFF",
    text: "#000000",
  },
  icon = {
    icon: null,
    position: "left",
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
  };
  size?: "small" | "default";
  type?: "primary" | "secondary" | "text";
}) {
  const buttonStyles = {
    primary:
      "rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap",
    secondary:
      "rounded-full border-[0.5px] hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap",
    text: "px-0 py-1 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap",
  };

  const buttonSizes = {
    small: "px-4 py-1.5 text-sm font-medium",
    default: "px-6 py-3.5 text-sm font-bold",
  };
  return (
    <button
      className={cn(
        className,
        size === "small" && buttonSizes.small,
        size === "default" && buttonSizes.default,
        buttonStyles[type],
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
      {icon?.position === "left" || (!icon?.position && icon.icon)}
      {children}
      {icon?.position === "right" && icon.icon}
    </button>
  );
}
