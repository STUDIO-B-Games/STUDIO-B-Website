import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaGithub,
  FaLinkedin,
  FaLinux,
  FaPlaystation,
  FaSteam,
  FaTwitter,
  FaWindows,
  FaXbox,
} from "react-icons/fa6";

// Platform icon mapping
export const platformIcons: { [key: string]: React.ReactNode } = {
  Android: <FaAndroid className="size-4 md:size-5 lg:size-6" />,
  iOS: <FaApple className="size-4 md:size-5 lg:size-6" />,
  Linux: <FaLinux className="size-4 md:size-5 lg:size-6" />,
  Mac: <FaApple className="size-4 md:size-5 lg:size-6" />,
  Playstation: <FaPlaystation className="size-4 md:size-5 lg:size-6" />,
  Steam: <FaSteam className="size-4 md:size-5 lg:size-6" />,
  Switch: <BsNintendoSwitch className="size-4 md:size-5 lg:size-6" />,
  Windows: <FaWindows className="size-4 md:size-5 lg:size-6" />,
  Xbox: <FaXbox className="size-4 md:size-5 lg:size-6" />,
};

// Social icon mapping
export const socialIcons: { [key: string]: React.ReactNode } = {
  LinkedIn: <FaLinkedin className="size-4 md:size-5 lg:size-6" />,
  Twitter: <FaTwitter className="size-4 md:size-5 lg:size-6" />,
  GitHub: <FaGithub className="size-4 md:size-5 lg:size-6" />,
};
