import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = ({ eventName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ⭐ Smooth Scroll Function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close mobile menu automatically
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
              {eventName || "KonfHub Event"}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("speakers")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Speakers
            </button>

            <button
              onClick={() => scrollToSection("workshops")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Workshops
            </button>

            <button
              onClick={() => scrollToSection("tickets")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Tickets
            </button>

            <button
              onClick={() => scrollToSection("sponsors")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sponsors
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Register Now
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("speakers")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Speakers
            </button>

            <button
              onClick={() => scrollToSection("workshops")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Workshops
            </button>

            <button
              onClick={() => scrollToSection("tickets")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Tickets
            </button>

            <button
              onClick={() => scrollToSection("sponsors")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Sponsors
            </button>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">
              Register Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
