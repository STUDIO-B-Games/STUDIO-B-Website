import Image from "next/image";
import { SectionHeader, Wrapper } from "./index";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Team() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Creative Director",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bio: "Visionary leader with 20 years of experience in game development and a passion for storytelling.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Marcus Chen",
      role: "Lead Game Designer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Award-winning designer known for creating immersive gameplay experiences and innovative mechanics.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Elena Rodriguez",
      role: "Art Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Creative artist with a unique vision for bringing game worlds to life through stunning visuals.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "James Patterson",
      role: "Technical Director",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Expert engineer specializing in cutting-edge game engines and performance optimization.",
      social: {
        linkedin: "#",
        github: "#",
      },
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
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-5 relative flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-blue-400 mb-3">{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
              {/* Social links overlay */}
              <div className="flex gap-3 mt-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="w-4 h-4 text-white" />
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="w-4 h-4 text-white" />
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-4 h-4 text-white" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}
