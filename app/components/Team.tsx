import Image from "next/image";
import { SectionHeader, Wrapper } from "./index";
import { socialIcons } from "../constants";

export default function Team() {
  const teamMembers = [
    {
      name: "Dylan Baker",
      role: "CEO & Creative Director",
      image: "https://randomuser.me/api/portraits/men/10.jpg",
      bio: "Visionary leader with 20 years of experience in game development and a passion for storytelling.",
      social: [
        {
          name: "LinkedIn",
          url: "#",
        },
        { name: "Twitter", url: "#" },
        { name: "GitHub", url: "#" },
      ],
    },
    {
      name: "Alex Baker",
      role: "Lead Game Designer",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "Award-winning designer known for creating immersive gameplay experiences and innovative mechanics.",
      social: [
        {
          name: "LinkedIn",
          url: "#",
        },
        { name: "Twitter", url: "#" },
        { name: "GitHub", url: "#" },
      ],
    },
  ];

  return (
    <Wrapper>
      <SectionHeader
        title="Meet Our Team"
        action={{ label: "Join Us", link: "/careers" }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group flex bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative aspect-square min-w-1/3 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover aspect-square transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="py-2.5 px-3.5 md:px-5 md:py-4 relative flex flex-col justify-between gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-indigo-300">{member.role}</p>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {member.bio}
              </p>
              {/* Social links overlay */}
              <div className="flex gap-3">
                {member.social
                  .filter(
                    (social) =>
                      social.url !== null &&
                      social.url !== "" &&
                      social.url !== undefined,
                  )
                  .map((social, index) => (
                    <a
                      href={social.url}
                      className="backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
                      <span>{socialIcons[social.name]}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
