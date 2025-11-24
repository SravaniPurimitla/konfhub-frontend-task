import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const VideoEmbed = ({ videoUrl, title = "Event Video", thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoUrl) return null;

  const getEmbedUrl = (url) => {
    // YouTube
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      )?.[1];
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : url;
    }
    
    // Vimeo
    if (url.includes('vimeo.com')) {
      const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
      return videoId ? `https://player.vimeo.com/video/${videoId}?autoplay=1` : url;
    }
    
    return url;
  };

  const getThumbnailUrl = (url) => {
    if (thumbnail) return thumbnail;
    
    // YouTube thumbnail
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.match(
        /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
      )?.[1];
      return videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null;
    }
    
    return null;
  };

  const thumbnailUrl = getThumbnailUrl(videoUrl);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Watch Event Highlights
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get a glimpse of what to expect at our amazing event
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900">
            {!isPlaying ? (
              // Thumbnail with Play Button
              <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
                {thumbnailUrl ? (
                  <img
                    src={thumbnailUrl}
                    alt={title}
                    className="w-full h-auto aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="h-24 w-24 mx-auto mb-4 opacity-80" />
                      <p className="text-2xl font-bold">{title}</p>
                    </div>
                  </div>
                )}
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-6 transform group-hover:scale-110 transition-transform duration-300 shadow-xl">
                    <Play className="h-12 w-12 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Video Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-semibold">{title}</p>
                </div>
              </div>
            ) : (
              // Video Player
              <div className="relative">
                <div className="relative w-full pb-[56.25%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={getEmbedUrl(videoUrl)}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Close Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(false);
                  }}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>

          {/* Video Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-blue-600 mb-1">2K+</div>
              <div className="text-gray-600 text-sm">Views</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
              <div className="text-gray-600 text-sm">Positive Feedback</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-600 mb-1">5 Min</div>
              <div className="text-gray-600 text-sm">Duration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEmbed;