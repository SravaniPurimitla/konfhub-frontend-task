import React from 'react';
import { Clock, MapPin, Users } from 'lucide-react';

const Workshops = ({ workshops, title, description }) => {
  if (!workshops || workshops.length === 0) return null;

  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <section id="workshops" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title || 'Workshops'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          {description && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {stripHtml(description)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {workshop.workshop_title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {stripHtml(workshop.workshop_description)}
              </p>

              <div className="space-y-2 text-sm text-gray-500">
                {workshop.workshop_date && (
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 flex-shrink-0" />
                    <span>{workshop.workshop_date}</span>
                  </div>
                )}
                
                {workshop.workshop_speaker && (
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 flex-shrink-0" />
                    <span>By {workshop.workshop_speaker}</span>
                  </div>
                )}
              </div>

              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;