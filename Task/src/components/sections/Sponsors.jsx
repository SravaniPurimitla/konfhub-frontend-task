import React from 'react';

const Sponsors = ({ sponsors, title, description }) => {
  if (!sponsors || sponsors.length === 0) return null;

  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <section id="sponsors" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title || 'Our Sponsors'}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          {description && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {stripHtml(description)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            >
              <img
                src={sponsor.sponsor_logo || 'https://via.placeholder.com/200x100?text=Sponsor'}
                alt={sponsor.sponsor_name || 'Sponsor'}
                className="max-w-full h-auto max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;