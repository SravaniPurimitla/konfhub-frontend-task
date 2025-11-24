import React from 'react';
import { Mail, Globe, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {

  // ⭐ Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // smooth scroll
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">KonfHub</h3>
            <p className="text-gray-400 mb-4">
              Building amazing event experiences. Connect, learn, and grow with us.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">

              <li
                className="text-gray-400 hover:text-white cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                About Event
              </li>

              <li
                className="text-gray-400 hover:text-white cursor-pointer"
                onClick={() => scrollToSection("speakers")}
              >
                Speakers
              </li>

              <li
                className="text-gray-400 hover:text-white cursor-pointer"
                onClick={() => scrollToSection("workshops")}
              >
                Workshops
              </li>

              <li
                className="text-gray-400 hover:text-white cursor-pointer"
                onClick={() => scrollToSection("sponsors")}
              >
                Sponsors
              </li>
               <li
                className="text-gray-400 hover:text-white cursor-pointer"
                onClick={() => scrollToSection("Tickets")}
              >
                Tickets
              </li>
              

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>reachus@konfhub.com</span>
              </li>

              <li className="flex items-center space-x-2 text-gray-400">
                <Globe className="h-5 w-5" />
                <span>www.konfhub.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 KonfHub. All rights reserved. | Built with React for Frontend Evaluation
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
