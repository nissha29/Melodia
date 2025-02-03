import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/nissha29/Melodia",
      label: "Github"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/nisha-kashyap-5972a9273/",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={20} />,
      href: "https://x.com/Nisha_297",
      label: "Twitter"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:nishakashyap2907@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-primary-bg text-white relative mt-24 font-playwrite">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-playwrite font-semibold text-primary-text">About Melodia</h3>
            <p className="text-gray-300 text-sm">
              Your premium music streaming platform. Experience music in its purest form.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-playwrite font-semibold">Connect With Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-text transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Melodia. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0 font-playwrite text-sm">
            <span>Made with</span>
            <Heart className="text-red-600" size={18} />
            <span>by Melodia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;