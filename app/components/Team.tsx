import Image from "next/image";
import { SectionHeader, Wrapper } from "./index";
import { socialIcons } from "../constants";

export default function Team() {
  const teamMembers = [
    {
      name: "Dylan B.",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      bio: "20 years of making pixels do cool stuff. Still can't believe this is a real job.",
      social: [
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
    {
      name: "Alex B.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "I'm terrible at coding, but great at coming up with impossible ideas for Dylan to build.",
      social: [
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "#" },
      ],
    },
  ];

  return (
    <Wrapper>
      <SectionHeader
        title="Meet Our Team"
        action={{ label: "Join Us", link: "/careers" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {/* Image */}
            <div className="relative w-[60%] aspect-square overflow-hidden rounded-full mb-2 md:mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-all duration-500 select-none pointer-events-none rounded-full"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Name and Social Links */}
            <div className="flex justify-between items-center w-full">
              <h3 className="text-2xl font-bold text-white">{member.name}</h3>

              <div className="flex gap-3">
                {member.social
                  .filter((social) => social.url)
                  .map((social, idx) => (
                    <a
                      href={social.url}
                      className="text-white hover:text-gray-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={idx}
                      aria-label={social.name}
                    >
                      <span className="text-lg">
                        {socialIcons[social.name]}
                      </span>
                    </a>
                  ))}
              </div>
            </div>

            {/* Bio */}
            {member.bio && (
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {member.bio}
              </p>
            )}
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
