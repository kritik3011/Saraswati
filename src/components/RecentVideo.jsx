import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const RecentVideo = () => {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchRecentVideo = async () => {
      const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
      if (!API_KEY) {
        setLoading(false);
        return;
      }

      try {
        const channelRes = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=@Saraswati_IAS&key=${API_KEY}`);
        const channelData = await channelRes.json();
        
        if (!channelData.items || channelData.items.length === 0) return;
        
        const uploadPlaylistId = channelData.items[0].contentDetails?.relatedPlaylists?.uploads;
        if (!uploadPlaylistId) return;

        const videoRes = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=1&key=${API_KEY}`);
        const videoData = await videoRes.json();
        
        if (videoData.items && videoData.items.length > 0) {
          const item = videoData.items[0];
          setVideo({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails?.maxres?.url || item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
          });
        }
      } catch (error) {
        console.error("Error fetching recent video:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentVideo();
  }, []);

  if (loading || !video) return null;

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-navy-900 mb-4">Latest Video</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 mb-6">Stay updated with our latest educational content and preparation strategies.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl group bg-black">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                className="w-full h-full absolute inset-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/30">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-12 h-12 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center text-navy-900 transform transition-transform hover:scale-110 shadow-lg mb-8 md:mb-0"
                  >
                    <Play className="w-6 h-6 md:w-10 md:h-10 ml-1 md:ml-2" fill="currentColor" />
                  </button>
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-b from-black/90 to-transparent">
                  <h3 className="text-white text-base md:text-xl font-bold line-clamp-2 leading-snug">{video.title}</h3>
                </div>
              </>
            )}
          </div>
          
          <div className="text-center mt-8 md:mt-10">
            <Link 
              to="/videos" 
              className="inline-flex items-center px-6 py-3 md:px-8 bg-navy-900 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors shadow-md hover:shadow-lg text-sm md:text-base"
            >
              View More Videos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentVideo;
