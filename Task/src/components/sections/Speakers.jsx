import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Speakers = ({ speakers, title, description }) => {
  if (!speakers || speakers.length === 0) return null;

  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <section id="speakers" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title || 'Featured Speakers'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          {description && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {stripHtml(description)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={speaker.speaker_image || 'https://via.placeholder.com/400x400?text=Speaker'}
                  alt={speaker.speaker_name}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {speaker.speaker_name}
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  {speaker.speaker_designation}
                </p>
                {speaker.speaker_organization && (
                  <p className="text-gray-600 text-sm mb-4">
                    {speaker.speaker_organization}
                  </p>
                )}
                
                {/* Social Links */}
                <div className="flex space-x-3">
                  {speaker.speaker_linkedin && (
                    <a
                      href={speaker.speaker_linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {speaker.speaker_twitter && (
                    <a
                      href={speaker.speaker_twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;