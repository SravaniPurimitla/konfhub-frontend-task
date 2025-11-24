import React from 'react';
import { Calendar, MapPin, Users, ExternalLink } from 'lucide-react';

const Hero = ({ event }) => {
  if (!event) return null;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                {event.event_short_name || 'EVENT'}
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {event.name}
            </h1>
            
            <p className="text-xl text-blue-100 leading-relaxed">
              Join us for an amazing event experience!
            </p>

            {/* Event Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 flex-shrink-0" />
                <span className="text-lg">
                  {formatDate(event.start_date)} - {formatDate(event.end_date)}
                </span>
              </div>
              
              {event.is_virtual ? (
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">Virtual Event</span>
                </div>
              ) : event.city && (
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">{event.city}, {event.country}</span>
                </div>
              )}
              
              {event.expected_attendees && (
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 flex-shrink-0" />
                  <span className="text-lg">{event.expected_attendees}+ Expected Attendees</span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition-all hover:scale-105">
                Register Now
              </button>
              {event.event_website && (
                <a
                  href={event.event_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src={event.event_poster_url || event.poster_thumbnail}
                alt={event.name}
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;