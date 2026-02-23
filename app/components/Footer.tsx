import Link from "next/link";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaDiscord,
  FaTwitch,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const data = [
    {
      title: "Games",
      links: [
        { label: "All Games", href: "/games" },
        { label: "Upcoming", href: "/games/upcoming" },
        { label: "Mobile", href: "/games/mobile" },
        { label: "Console", href: "/games/console" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "News", href: "/news" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/support" },
        { label: "Contact Us", href: "/support/contact" },
        { label: "Community", href: "/community" },
        { label: "Forums", href: "/forums" },
      ],
    },
  ];

  return (
    <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Brand Section - Left Side */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-wider mb-4 block"
            >
              STUDIO
            </Link>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Creating immersive gaming experiences that push the boundaries of
              interactive entertainment.
            </p>
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitch"
              >
                <FaTwitch className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section - Right Side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {data.map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Studio. All rights reserved.
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Cookie Policy
            </Link>
            <Link
              href="/legal"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
