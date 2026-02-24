import Image from "next/image";
import { SectionHeader, Wrapper } from "./index";

import FO76 from "../assets/HeroSlider/FO76.jpg";
import DOOM from "../assets/HeroSlider/doom.avif";
import Oblivion from "../assets/HeroSlider/oblivion.avif";
import Indiana from "../assets/HeroSlider/indiana.avif";
import Starfield from "../assets/HeroSlider/starfield.avif";
import ESO from "../assets/HeroSlider/scrolls.avif";
import { platformIcons } from "../constants";

export default function Games() {
  const games = [
    {
      title: "Fallout 76",
      genre: "RPG, Open World",
      image: FO76,
      platforms: [
        "Android",
        "iOS",
        "Linux",
        "Mac",
        "Playstation",
        "Steam",
        "Switch",
        "Windows",
        "Xbox",
      ],
      status: "Available Now",
      accentColor: "#5A6E6B",
      // gridClass: "col-span-1 sm:col-span-2 md:col-span-3 md:row-span-2",
      gridClass: "col-span-1 sm:col-span-2 md:row-span-2",
    },
    {
      title: "DOOM: The Dark Ages",
      genre: "Action, Shooter",
      image: DOOM,
      platforms: ["Windows", "Playstation", "Xbox"],
      status: "Coming Soon",
      accentColor: "#8B0000",
      gridClass: "col-span-1 lg:row-span-2",
    },
    {
      title: "Starfield",
      genre: "RPG, Space Exploration",
      image: Starfield,
      platforms: ["Windows", "Xbox", "Steam"],
      status: "Available Now",
      accentColor: "#1a1f2e",
      gridClass: "col-span-1",
    },
    {
      title: "Oblivion Remastered",
      genre: "RPG, Fantasy",
      image: Oblivion,
      platforms: ["Windows", "Playstation", "Xbox"],
      status: "Available Now",
      accentColor: "#8B4513",
      gridClass: "col-span-1 lg:row-span-1 sm:col-span-2",
    },
    {
      title: "Indiana Jones and the Great Jerk",
      genre: "Action, Adventure",
      image: Indiana,
      platforms: ["Windows", "Playstation", "Xbox", "Mac"],
      status: "Available Now",
      accentColor: "#4a3c2a",
      gridClass: "col-span-1 lg:col-span-2",
    },
    {
      title: "The Elder Scrolls Online",
      genre: "MMORPG, Fantasy",
      image: ESO,
      platforms: ["Windows", "Playstation", "Xbox", "Mac"],
      status: "Available Now",
      accentColor: "#4a3c2a",
      gridClass: "col-span-1",
    },
  ];

  return (
    <Wrapper>
      <SectionHeader
        title="Our Games"
        action={{ label: "All Games", link: "/games" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[160px] md:auto-rows-[280px] gap-1.5 sm:gap-3 md:gap-4">
        {games.map((game, index) => (
          <div
            key={index}
            className={`${game.gridClass} border border-white/10 hover:border-white/25 transition-all duration-300 ease-in-out relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer`}
          >
            <Image
              src={game.image}
              alt={game.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-2 sm:p-4 flex flex-col justify-between">
              <div className="flex justify-between">
                {/* Status badge */}
                <span className="text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-2.5 md:px-3 py-1 rounded-full w-fit whitespace-nowrap">
                  {game.status}
                </span>
                {/* Platform icons */}
                <div className="flex items-center gap-1.5 md:gap-2">
                  {game.platforms.slice(0, 4).map((platform, idx) => (
                    <div key={idx} className="text-white/90">
                      {platformIcons[platform]}
                    </div>
                  ))}
                  {game.platforms.length > 4 && (
                    <span className="text-white text-xs md:text-sm font-semibold">
                      +{game.platforms.length - 4}
                    </span>
                  )}
                </div>
              </div>
              {/* Game title and genre */}
              <div className="flex flex-col gap-1 w-full justify-between">
                <h3 className="text-white line-clamp-2 text-xl md:text-2xl font-bold drop-shadow-lg">
                  {game.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
