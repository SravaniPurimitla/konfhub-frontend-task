import React from 'react';
import { Globe, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

const Organizer = ({ organizer, organizerInfo }) => {
  if (!organizer) return null;

  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Organized By
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Organizer Image */}
                {organizer.organiser_image_url && (
                  <div className="flex-shrink-0">
                    <img
                      src={organizer.organiser_image_url}
                      alt={organizer.organiser_name}
                      className="w-32 h-32 rounded-xl object-cover shadow-lg"
                    />
                  </div>
                )}

                {/* Organizer Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {organizer.organiser_name}
                  </h3>
                  
                  {organizerInfo && (
                    <p className="text-gray-700 text-lg mb-6">
                      {stripHtml(organizerInfo)}
                    </p>
                  )}

                  {/* Contact Information */}
                  <div className="space-y-3 mb-6">
                    {organizer.organiser_email && (
                      <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-600">
                        <Mail className="h-5 w-5 flex-shrink-0" />
                        <a href={`mailto:${organizer.organiser_email}`} className="hover:text-blue-600">
                          {organizer.organiser_email}
                        </a>
                      </div>
                    )}
                    
                    {organizer.organiser_phone && (
                      <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-600">
                        <Phone className="h-5 w-5 flex-shrink-0" />
                        <span>{organizer.organiser_phone}</span>
                      </div>
                    )}
                    
                    {organizer.organiser_website && (
                      <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-600">
                        <Globe className="h-5 w-5 flex-shrink-0" />
                        <a
                          href={organizer.organiser_website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600"
                        >
                          {organizer.organiser_website}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center md:justify-start space-x-4">
                    {organizer.organizer_twitter_url && (
                      <a
                        href={organizer.organizer_twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="h-6 w-6" />
                      </a>
                    )}
                    {organizer.organizer_linkedin_url && (
                      <a
                        href={organizer.organizer_linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-6 w-6" />
                      </a>
                    )}
                    {organizer.organizer_facebook_url && (
                      <a
                        href={organizer.organizer_facebook_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-700 transition-colors"
                      >
                        <Facebook className="h-6 w-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizer;