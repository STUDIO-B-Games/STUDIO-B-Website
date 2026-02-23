import GTA6 from "../assets/HeroSlider/GTA6 BG.webp";
import GTA6_logo from "../assets/HeroSlider/GTA6 Logo.png";
import GTAO from "../assets/HeroSlider/GTA ONLINE GB.webp";
import GTAO_logo from "../assets/HeroSlider/GTA ONLINE Logo.png";
import GTA5 from "../assets/HeroSlider/GTA5 BG.webp";
import GTA5_logo from "../assets/HeroSlider/GTA5 Logo.png";
import FO4 from "../assets/HeroSlider/FO4.jpg";
import FO4_logo from "../assets/HeroSlider/FO4 Logo.png";

import { Slide } from "../types/data/HeroSlider";

const HeroSliderData: Slide[] = [
  {
    title: FO4_logo,
    subtitle: "Trailer 2",
    background: {
      src: FO4,
      alt: "Fallout 4 Background",
    },
    accentColor: "#5A6E6B",
    buttons: {
      primary: {
        type: "watch",
        label: "Watch Trailer",
        color: "#F3C75E",
        font: "#000000",
      },
      secondary: {
        label: "Explore the Wasteland",
        color: "#FFFFFF",
      },
    },
  },
  {
    title: GTA6_logo,
    subtitle: "Trailer 2",
    background: {
      src: GTA6,
      alt: "Grand Theft Auto VI Background",
    },
    accentColor: "#2F4560",
    buttons: {
      primary: {
        type: "watch",
        label: "Watch Trailer",
        color: "#FFB0C4",
        font: "#000000",
      },
      secondary: {
        label: "Explore Leonida",
        color: "#FFFFFF",
      },
    },
  },
  {
    title: GTAO_logo,
    subtitle: "A Safehouse in the Hills Now Available",
    background: {
      src: GTAO,
      alt: "Grand Theft Auto Online Background",
    },
    accentColor: "#23382F",
    buttons: {
      primary: {
        type: "watch",
        label: "Watch Trailer",
        color: "#E9D37A",
        font: "#000000",
      },
      secondary: {
        label: "Learn More",
        color: "#FFFFFF",
      },
    },
  },
  {
    title: GTA5_logo,
    subtitle: "Experience GTAv Enhanced: The Best Version on PC",
    background: {
      src: GTA5,
      alt: "Grand Theft Auto V Background",
    },
    accentColor: "#0C0B03",
    buttons: {
      primary: {
        type: "watch",
        label: "Watch Trailer",
        color: "#E0CC89",
        font: "#000000",
      },
      secondary: {
        label: "Learn More",
        color: "#FFFFFF",
      },
    },
  },
];

export default HeroSliderData;
