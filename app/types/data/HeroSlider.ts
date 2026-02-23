import { StaticImageData } from "next/image";

export type Slide = {
  title: StaticImageData | string;
  subtitle: string;
  background: {
    src: StaticImageData | string;
    alt: string;
  };
  accentColor?: string;
  buttons?: {
    primary?: {
      type: "watch" | "explore";
      label: string;
      color: string;
      font: string;
    };
    secondary?: {
      label: string;
      color: string;
    };
  };
};