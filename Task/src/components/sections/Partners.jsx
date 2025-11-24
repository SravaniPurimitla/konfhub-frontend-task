import React, { useEffect, useRef } from "react";

const Partners = ({ partners, title, description }) => {
  const scrollRef = useRef(null);

  // Auto-scroll logic without keyframes
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let speed = 1; // adjust speed here
    let scrollAmount = 0;

    const autoScroll = () => {
      scrollAmount += speed;
      container.scrollLeft = scrollAmount;

      // Reset when reaching the end for infinite loop
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    autoScroll();
  }, []);

  if (!partners || partners.length === 0) return null;

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
        </div>

        {/* Auto Scroll Container */}
        <div
          ref={scrollRef}
          className="overflow-x-hidden whitespace-nowrap no-scrollbar"
        >
          <div className="flex gap-10 px-4">
            {/* Duplication for infinite scroll */}
            {[...partners, ...partners].map((p, index) => (
              <div
                key={index}
                className="min-w-[150px] h-24 flex items-center justify-center bg-gray-50 rounded-xl p-4"
              >
                <img
                  src={p.partner_logo}
                  alt={p.partner_name}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;

