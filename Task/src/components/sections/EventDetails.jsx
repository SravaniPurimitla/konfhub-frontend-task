import React from 'react';
import { Calendar, MapPin, Clock, Globe, Users, Tag } from 'lucide-react';

const EventDetails = ({ event }) => {
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

  const details = [
    {
      icon: Calendar,
      title: 'Date',
      value: `${formatDate(event.start_date)}`,
      subtitle: `to ${formatDate(event.end_date)}`,
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Time',
      value: event.start_time ? event.start_time.substring(0, 5) : 'TBA',
      subtitle: event.time_zone || 'IST',
      color: 'purple'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: event.is_virtual ? 'Virtual Event' : (event.city || 'Online'),
      subtitle: event.is_virtual ? 'Join from anywhere' : event.country,
      color: 'green'
    },
    {
      icon: Users,
      title: 'Expected Attendees',
      value: event.expected_attendees ? `${event.expected_attendees}+` : 'Open for all',
      subtitle: 'Participants',
      color: 'orange'
    }
  ];

  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${colorMap[detail.color]} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-2">
                  {detail.title}
                </h3>
                <p className="text-gray-900 text-xl font-bold mb-1">
                  {detail.value}
                </p>
                <p className="text-gray-600 text-sm">
                  {detail.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;