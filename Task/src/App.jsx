import React, { useState, useEffect } from "react";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
// Section Components
import Hero from "./components/sections/Hero";
import Description from "./components/sections/Description";
import EventDetails from "./components/sections/EventDetails";
import Speakers from "./components/sections/Speakers";
import Workshops from "./components/sections/Workshops";
import Organizer from "./components/sections/Organizer";
import Sponsors from "./components/sections/Sponsors";
import Partners from "./components/sections/Partners";
import Tickets from "./components/sections/Tickets";
import VideoEmbed from "./components/common/VideoEmbed";

// Loading and Error Components
const Loading = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 mb-4"></div>
    <p className="text-gray-600 font-medium text-lg">
      Loading event details...
    </p>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-8 max-w-md text-center">
      <div className="text-red-600 text-5xl mb-4">⚠️</div>
      <h3 className="text-red-800 font-bold text-xl mb-2">
        Oops! Something went wrong
      </h3>
      <p className="text-red-700">{message}</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
      >
        Try Again
      </button>
    </div>
  </div>
);

// Mock data for demonstration (since API doesn't return complete data)
const getMockData = (eventData) => {
  const mockSpeakers = [
    {
      speaker_name: "Dr. Sarah Johnson",
      speaker_designation: "Chief Technology Officer",
      speaker_organization: "Tech Innovations Inc.",
      speaker_image: "https://randomuser.me/api/portraits/women/44.jpg",
      speaker_linkedin: "https://linkedin.com",
      speaker_twitter: "https://twitter.com",
    },
    {
      speaker_name: "Michael Chen",
      speaker_designation: "Senior Frontend Architect",
      speaker_organization: "Digital Solutions Ltd",
      speaker_image: "https://randomuser.me/api/portraits/men/32.jpg",
      speaker_linkedin: "https://linkedin.com",
    },
    {
      speaker_name: "Emily Rodriguez",
      speaker_designation: "UX Design Lead",
      speaker_organization: "Creative Studio",
      speaker_image: "https://randomuser.me/api/portraits/women/68.jpg",
      speaker_twitter: "https://twitter.com",
    },
    {
      speaker_name: "James Wilson",
      speaker_designation: "Full Stack Developer",
      speaker_organization: "Web Solutions Co",
      speaker_image: "https://randomuser.me/api/portraits/men/52.jpg",
      speaker_linkedin: "https://linkedin.com",
    },
    {
      speaker_name: "Priya Sharma",
      speaker_designation: "DevOps Engineer",
      speaker_organization: "Cloud Systems",
      speaker_image: "https://randomuser.me/api/portraits/women/80.jpg",
      speaker_twitter: "https://twitter.com",
    },
    {
      speaker_name: "Alex Kim",
      speaker_designation: "Product Manager",
      speaker_organization: "StartupHub",
      speaker_image: "https://randomuser.me/api/portraits/men/75.jpg",
      speaker_linkedin: "https://linkedin.com",
    },
  ];

  const mockWorkshops = [
    {
      workshop_title: "Introduction to React Hooks",
      workshop_description:
        "Learn the fundamentals of React Hooks and how to use them effectively in your applications. This hands-on workshop covers useState, useEffect, useContext and custom hooks.",
      workshop_date: "July 31, 2034 - 10:00 AM",
      workshop_speaker: "Michael Chen",
    },
    {
      workshop_title: "Advanced CSS Techniques",
      workshop_description:
        "Master modern CSS features including Grid, Flexbox, CSS Variables, and animations. Build responsive layouts that work across all devices.",
      workshop_date: "July 31, 2034 - 2:00 PM",
      workshop_speaker: "Emily Rodriguez",
    },
    {
      workshop_title: "Building Scalable APIs",
      workshop_description:
        "Design and implement RESTful APIs that scale. Learn best practices for API design, authentication, rate limiting, and documentation.",
      workshop_date: "August 1, 2034 - 10:00 AM",
      workshop_speaker: "James Wilson",
    },
    {
      workshop_title: "DevOps Best Practices",
      workshop_description:
        "Explore CI/CD pipelines, containerization with Docker, and deployment strategies. Learn how to automate your development workflow.",
      workshop_date: "August 1, 2034 - 2:00 PM",
      workshop_speaker: "Priya Sharma",
    },
    {
      workshop_title: "UI/UX Design Principles",
      workshop_description:
        "Discover the principles of great user interface and experience design. Learn to create intuitive, accessible, and beautiful applications.",
      workshop_date: "August 2, 2034 - 10:00 AM",
      workshop_speaker: "Emily Rodriguez",
    },
    {
      workshop_title: "Product Management 101",
      workshop_description:
        "Learn the essentials of product management including roadmap planning, user research, and stakeholder management.",
      workshop_date: "August 2, 2034 - 2:00 PM",
      workshop_speaker: "Alex Kim",
    },
  ];

  const mockSponsors = [
    {
      sponsor_name: "TechCorp",
      sponsor_logo: "https://logo.clearbit.com/google.com",
    },
    {
      sponsor_name: "DevTools Inc",
      sponsor_logo: "https://logo.clearbit.com/microsoft.com",
    },
    {
      sponsor_name: "CloudSystems",
      sponsor_logo: "https://logo.clearbit.com/amazon.com",
    },
    {
      sponsor_name: "WebSolutions",
      sponsor_logo: "https://logo.clearbit.com/oracle.com",
    },
    {
      sponsor_name: "AI Innovations",
      sponsor_logo: "https://logo.clearbit.com/salesforce.com",
    },
    {
      sponsor_name: "CyberSecurity Co",
      sponsor_logo: "https://logo.clearbit.com/cisco.com",
    },
    {
      sponsor_name: "Mobile First",
      sponsor_logo: "https://logo.clearbit.com/apple.com",
    },
  ];

  const mockPartners = [
    {
      partner_name: "StartupHub",
      partner_logo: "https://logo.clearbit.com/github.com",
    },
    {
      partner_name: "Tech Community",
      partner_logo: "https://logo.clearbit.com/stackoverflow.com",
    },
    {
      partner_name: "Developer Network",
      partner_logo: "https://logo.clearbit.com/reddit.com",
    },
    {
      partner_name: "Code Academy",
      partner_logo: "https://logo.clearbit.com/coursera.org",
    },
    {
      partner_name: "Learning Platform",
      partner_logo: "https://logo.clearbit.com/udemy.com",
    },
    {
      partner_name: "Open Source Foundation",
      partner_logo: "https://logo.clearbit.com/mozilla.org",
    },
    {
      partner_name: "Tech Magazine",
      partner_logo: "https://logo.clearbit.com/techcrunch.com",
    },
  ];

  return {
    ...eventData,
    speakers:
      eventData.speakers && eventData.speakers.length > 0
        ? eventData.speakers
        : mockSpeakers,
    workshops:
      eventData.workshops && eventData.workshops.length > 0
        ? eventData.workshops
        : mockWorkshops,
    sponsors:
      eventData.sponsors && eventData.sponsors.length > 0
        ? eventData.sponsors
        : mockSponsors,
    partners:
      eventData.partners && eventData.partners.length > 0
        ? eventData.partners
        : mockPartners,
  };
};

function App() {
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dev-api.konfhub.com/event/public/konfhub-frontend-evaluation-task"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Add mock data for demonstration since API doesn't return complete data
        const enrichedData = getMockData(data);

        setEventData(enrichedData);
        setError(null);
      } catch (err) {
        console.error("Error fetching event data:", err);
        setError(err.message || "Failed to load event data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEventData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!eventData) return <ErrorMessage message="No event data found" />;

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <Header eventName={eventData.name} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero event={eventData} />
        {eventData.description &&
          eventData.description.includes("youtube.com") && (
            <VideoEmbed
              videoUrl="https://www.youtube.com/embed/bEM35JDYjrI"
              description="Watch our event highlights and see what makes this conference special"
            />
          )}

        {/* Description Section */}
        <Description description={eventData.description} />

        {/* Event Details Section */}
        <EventDetails event={eventData} />

        <Tickets tickets={eventData.tickets} />
        {/* Speakers Section */}
        {eventData.has_speakers && (
          <Speakers
            speakers={eventData.speakers}
            title={eventData.speaker_section_title}
            description={eventData.speaker_section_description}
          />
        )}

        {/* Workshops Section */}
        {eventData.has_workshops && (
          <Workshops
            workshops={eventData.workshops}
            title={eventData.workshop_section_title}
            description={eventData.workshop_section_description}
          />
        )}

        {/* Organizer Section */}
        <Organizer
          organizer={{
            organiser_name: eventData.organiser_name,
            organiser_email: eventData.organiser_email,
            organiser_phone: eventData.organiser_phone,
            organiser_website: eventData.organiser_website,
            organiser_image_url: eventData.organiser_image_url,
            organizer_twitter_url: eventData.organizer_twitter_url,
            organizer_linkedin_url: eventData.organizer_linkedin_url,
            organizer_facebook_url: eventData.organizer_facebook_url,
          }}
          organizerInfo={eventData.organiser_info}
        />

        {/* Sponsors Section */}
        {eventData.has_sponsors && (
          <Sponsors
            sponsors={eventData.sponsors}
            title={eventData.sponsor_section_title}
            description={eventData.sponsor_section_description}
          />
        )}

        {/* Partners Section */}
        {eventData.has_partners && (
          <Partners
            partners={eventData.partners}
            title={eventData.partner_section_title}
            description={eventData.partner_section_description}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
