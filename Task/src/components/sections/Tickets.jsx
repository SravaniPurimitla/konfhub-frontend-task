import React, { useState } from 'react';
import { Check, Clock, Users, Tag, Zap, Star } from 'lucide-react';

const Tickets = ({ tickets }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Mock ticket data if API doesn't provide
  const defaultTickets = [
    {
      ticket_id: 1,
      ticket_name: "Early Bird Pass",
      ticket_price: 999,
      ticket_currency: "INR",
      ticket_description: "Limited time offer! Get access to all sessions and workshops at a discounted price.",
      ticket_features: [
        "Access to all sessions",
        "3 Workshop tickets",
        "Networking events",
        "Conference materials",
        "Lunch & Refreshments"
      ],
      tickets_available: 50,
      ticket_type: "early_bird",
      is_popular: false
    },
    {
      ticket_id: 2,
      ticket_name: "Standard Pass",
      ticket_price: 1499,
      ticket_currency: "INR",
      ticket_description: "Full access to the conference with all the essential features you need.",
      ticket_features: [
        "Access to all sessions",
        "5 Workshop tickets",
        "Networking events",
        "Conference materials",
        "Lunch & Refreshments",
        "Goodies & Swag"
      ],
      tickets_available: 100,
      ticket_type: "standard",
      is_popular: true
    },
    {
      ticket_id: 3,
      ticket_name: "Premium Pass",
      ticket_price: 2499,
      ticket_currency: "INR",
      ticket_description: "Complete VIP experience with exclusive perks and benefits.",
      ticket_features: [
        "Access to all sessions",
        "Unlimited Workshop access",
        "VIP Networking events",
        "Priority seating",
        "Conference materials",
        "Lunch & Refreshments",
        "Premium Goodies & Swag",
        "Certificate of Participation",
        "One-on-one with speakers"
      ],
      tickets_available: 25,
      ticket_type: "premium",
      is_popular: false
    },
    {
      ticket_id: 4,
      ticket_name: "Student Pass",
      ticket_price: 499,
      ticket_currency: "INR",
      ticket_description: "Special pricing for students. Valid student ID required at entry.",
      ticket_features: [
        "Access to all sessions",
        "2 Workshop tickets",
        "Networking events",
        "Conference materials",
        "Lunch & Refreshments"
      ],
      tickets_available: 75,
      ticket_type: "student",
      is_popular: false
    }
  ];

  const ticketData = tickets && tickets.length > 0 ? tickets : defaultTickets;

  const getTicketIcon = (type) => {
    switch (type) {
      case 'early_bird':
        return <Clock className="h-6 w-6" />;
      case 'premium':
        return <Star className="h-6 w-6" />;
      case 'student':
        return <Users className="h-6 w-6" />;
      default:
        return <Tag className="h-6 w-6" />;
    }
  };

  const getTicketColor = (type, isPopular) => {
    if (isPopular) return 'border-blue-500 shadow-blue-100';
    switch (type) {
      case 'early_bird':
        return 'border-green-500 shadow-green-100';
      case 'premium':
        return 'border-purple-500 shadow-purple-100';
      case 'student':
        return 'border-orange-500 shadow-orange-100';
      default:
        return 'border-gray-300 shadow-gray-100';
    }
  };

  const getButtonColor = (type, isPopular) => {
    if (isPopular) return 'bg-blue-600 hover:bg-blue-700';
    switch (type) {
      case 'early_bird':
        return 'bg-green-600 hover:bg-green-700';
      case 'premium':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'student':
        return 'bg-orange-600 hover:bg-orange-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <section id="tickets" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get Your Tickets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect ticket for your needs and join us for an amazing experience!
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {ticketData.map((ticket, index) => (
            <div
              key={ticket.ticket_id || index}
              className={`
                relative bg-white rounded-2xl shadow-xl 
                border-2 ${getTicketColor(ticket.ticket_type, ticket.is_popular)}
                hover:shadow-2xl transition-all duration-300 
                ${selectedTicket === ticket.ticket_id ? 'ring-4 ring-blue-300' : ''}
                ${ticket.is_popular ? 'transform lg:scale-105' : ''}
              `}
            >
              {/* Popular Badge */}
              {ticket.is_popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                    <Zap className="h-4 w-4" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-6 lg:p-8">
                {/* Ticket Icon */}
                <div className={`
                  w-12 h-12 rounded-lg flex items-center justify-center mb-4
                  ${ticket.is_popular ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}
                `}>
                  {getTicketIcon(ticket.ticket_type)}
                </div>

                {/* Ticket Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {ticket.ticket_name}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{ticket.ticket_price}
                  </span>
                  <span className="text-gray-500 ml-2">/ person</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {ticket.ticket_description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {ticket.ticket_features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Availability */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Available</span>
                    <span className="font-semibold text-gray-900">
                      {ticket.tickets_available} tickets
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min((ticket.tickets_available / 100) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Buy Button */}
                <button
                  onClick={() => setSelectedTicket(ticket.ticket_id)}
                  className={`
                    w-full text-white font-bold py-3 rounded-lg 
                    transition-all duration-300 transform hover:scale-105
                    ${getButtonColor(ticket.ticket_type, ticket.is_popular)}
                  `}
                >
                  {selectedTicket === ticket.ticket_id ? 'Selected ✓' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-4">
             All tickets include access to conference materials and refreshments
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>Instant confirmation</span>
            <span>Secure payment</span>
            <span>Free cancellation up to 7 days before event</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;