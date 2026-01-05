import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTiktok,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialLinks = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@lanrecodes1",
      icon: faTiktok,
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/olanrewajum",
      icon: faLinkedin,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/lanrecodes1",
      icon: faInstagram,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/thejasperjay",
      icon: faXTwitter,
    },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <p className="text-gray-400 text-xs md:text-sm">Let's connect</p>

          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </a>
              );
            })}
          </div>

          <p className="text-gray-500 text-xs md:text-xs text-center">
            © 2025 Lanre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
