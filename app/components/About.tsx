import { SectionHeader, Wrapper } from "./index";
import { FaGamepad, FaTrophy, FaUsers } from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

export default function About() {
  const stats = [
    {
      icon: <FaGamepad className="w-8 h-8" />,
      value: "50+",
      label: "Games Published",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      value: "100M+",
      label: "Active Players",
    },
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      value: "150+",
      label: "Countries",
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      value: "200+",
      label: "Industry Awards",
    },
  ];

  const values = [
    {
      title: "Our Mission",
      description:
        "To create world-class gaming experiences that inspire and entertain millions of players worldwide, while fostering a culture of creativity and innovation.",
      style: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Our Vision",
      description:
        "To be the most respected and innovative game studio in the industry, known for pushing boundaries and setting new standards in interactive entertainment.",
      style: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Our Values",
      description:
        "Excellence, creativity, inclusivity, and player-first thinking drive everything we do. We believe great games come from diverse teams and bold ideas.",
      style: "from-yellow-500/20 to-orange-500/20",
    },
  ];

  return (
    <Wrapper>
      <SectionHeader
        title="About Us"
        action={{ label: "Learn More", link: "/about" }}
      />

      <div className="grid grid-cols-1 gap-8 md:gap-12">
        {/* Left side - Description */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Crafting Legendary Gaming Experiences Since 1994
          </h3>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            We are a leading game development studio dedicated to creating
            immersive worlds and unforgettable adventures. With decades of
            experience and a passion for innovation, we push the boundaries of
            interactive entertainment.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Our diverse team of talented developers, artists, and storytellers
            work together to bring unique visions to life. From epic RPGs to
            groundbreaking multiplayer experiences, we strive to deliver games
            that resonate with players around the globe.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            At our core, we believe in the power of games to inspire, challenge,
            and unite people. Every project we undertake is a labor of love,
            designed to create lasting memories and build vibrant communities.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/15 transition-colors rounded-xl p-3 sm:p-6 md:p-8 flex flex-col items-center text-center group border border-white/20 hover:border-white/25"
            >
              <div className="text-white/80 group-hover:text-white transition-colors mb-2 sm:mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mission/Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {values.map((value, index) => (
          <div
            className={`space-y-1.5 sm:space-y-3 bg-linear-to-br rounded-xl p-6 md:p-8, ${value.style}`}
            key={index}
          >
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {value.title}
            </h4>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
