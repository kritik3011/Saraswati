import React, { useState, useEffect, useCallback } from 'react';
import { Play, ListVideo } from 'lucide-react';
import { FaYoutube } from 'react-icons/fa';

const Videos = () => {
  const [activeTab, setActiveTab] = useState('videos');
  
  const [channelInfo, setChannelInfo] = useState({
    name: "Saraswati IAS",
    handle: "@Saraswati_IAS",
    url: "https://www.youtube.com/@Saraswati_IAS",
    subscribers: "Loading...",
    description: "Your trusted platform for UPSC and UPPSC preparation.",
    bannerUrl: "/logo.jpg", // fallback
    avatarUrl: "/logo.jpg",
    uploadPlaylistId: null
  });
  
  const [videos, setVideos] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [nextPageToken, setNextPageToken] = useState(null);

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  const fetchVideos = useCallback(async (playlistId, pageToken = '') => {
    try {
      const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ''}`;
      const res = await fetch(url);
      const data = await res.json();
      
      const fetchedVideos = data.items ? data.items.map(item => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
        publishedAt: formatDate(item.snippet.publishedAt)
      })) : [];

      return { fetchedVideos, nextToken: data.nextPageToken };
    } catch (err) {
      console.error("Error fetching videos:", err);
      return { fetchedVideos: [], nextToken: null };
    }
  }, [API_KEY]);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      if (!API_KEY) {
        setError("YouTube API Key not found. Please provide VITE_YOUTUBE_API_KEY in your .env file.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // 1. Fetch channel ID and basic info using the handle
        const channelRes = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings,contentDetails&forHandle=@Saraswati_IAS&key=${API_KEY}`);
        const channelData = await channelRes.json();
        
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error("Channel not found");
        }
        
        const channel = channelData.items[0];
        const channelId = channel.id;
        const uploadPlaylistId = channel.contentDetails?.relatedPlaylists?.uploads;
        
        // Improve banner quality by appending Google image resize parameters
        const rawBannerUrl = channel.brandingSettings?.image?.bannerExternalUrl || "/logo.jpg";
        const highResBannerUrl = rawBannerUrl.includes('googleusercontent.com') || rawBannerUrl.includes('yt3.ggpht.com') 
          ? `${rawBannerUrl}=w1920-fcrop64=1,00000000ffffffff-k-c0xffffffff-no-nd-rj`
          : rawBannerUrl;

        setChannelInfo({
          name: channel.snippet.title,
          handle: channel.snippet.customUrl || "@Saraswati_IAS",
          url: `https://www.youtube.com/${channel.snippet.customUrl}`,
          subscribers: formatSubscriberCount(channel.statistics.subscriberCount),
          description: channel.snippet.description,
          bannerUrl: highResBannerUrl,
          avatarUrl: channel.snippet.thumbnails?.high?.url || "/logo.jpg",
          uploadPlaylistId: uploadPlaylistId
        });

        // 2. Fetch all recent videos from the 'uploads' playlist
        if (uploadPlaylistId) {
          const { fetchedVideos, nextToken } = await fetchVideos(uploadPlaylistId);
          setVideos(fetchedVideos);
          setNextPageToken(nextToken);
        }

        // 3. Fetch playlists
        const playlistsRes = await fetch(`https://youtube.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${channelId}&maxResults=50&key=${API_KEY}`);
        const playlistsData = await playlistsRes.json();
        
        const fetchedPlaylists = playlistsData.items ? playlistsData.items.map(item => ({
          id: item.id,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
          videoCount: item.contentDetails.itemCount
        })) : [];
        setPlaylists(fetchedPlaylists);

      } catch (err) {
        console.error("Error fetching YouTube data:", err);
        setError("Failed to fetch data from YouTube. Please check your API key or network connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, [API_KEY, fetchVideos]);

  const handleLoadMore = async () => {
    if (!channelInfo.uploadPlaylistId || !nextPageToken) return;
    setLoadingMore(true);
    const { fetchedVideos, nextToken } = await fetchVideos(channelInfo.uploadPlaylistId, nextPageToken);
    setVideos(prev => [...prev, ...fetchedVideos]);
    setNextPageToken(nextToken);
    setLoadingMore(false);
  };

  const formatSubscriberCount = (count) => {
    if (!count) return "0";
    const num = parseInt(count);
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return count.toString();
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      {/* Channel Header - Compact & Professional */}
      <div className="bg-white border-b shadow-sm">
        {/* Banner Area */}
        <div className="h-[160px] md:h-[220px] w-full relative bg-navy-900 overflow-hidden">
          {/* Solid color background banner */}
          {/* Subtle text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/90">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest uppercase mb-1">Saraswati IAS</h2>
            <p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase opacity-80 text-center px-4">
              UPSC • UPPCS • CIVIL SERVICES PREPARATION
            </p>
            <p className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-gold mt-2">
              Since 1998
            </p>
          </div>
        </div>
        
        {/* Channel Info Area (Compact) */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative -mt-6 sm:-mt-8 pb-6 sm:pb-4">
            {/* Avatar */}
            <div className="relative z-10 flex-shrink-0">
              <img
                src={channelInfo.avatarUrl}
                alt={channelInfo.name}
                className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full border-4 border-white shadow-md bg-white object-cover"
              />
            </div>
            
            {/* Channel Details */}
            <div className="flex-grow text-center sm:text-left pt-2 sm:pt-10 z-10 flex flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{channelInfo.name}</h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600 mt-1 text-sm font-medium">
                <span>{channelInfo.handle}</span>
                <span className="text-gray-300">•</span>
                <span>{channelInfo.subscribers} subscribers</span>
              </div>
              <p className="text-gray-500 mt-1 text-sm max-w-2xl line-clamp-1">
                {channelInfo.description}
              </p>
            </div>
            
            {/* Subscribe Button (Aligned) */}
            <div className="mt-2 sm:mt-10 sm:ml-auto flex-shrink-0 z-10">
              <a
                href={channelInfo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#CC0000] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-[#aa0000] transition-colors shadow-sm"
              >
                <FaYoutube className="w-5 h-5" />
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs (Compact) */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 py-3 px-4 sm:px-6 font-medium text-sm transition-colors relative ${
              activeTab === 'videos'
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <Play className="w-4 h-4" />
            Videos
            {activeTab === 'videos' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('playlists')}
            className={`flex items-center gap-2 py-3 px-4 sm:px-6 font-medium text-sm transition-colors relative ${
              activeTab === 'playlists'
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            <ListVideo className="w-4 h-4" />
            Playlists
            {activeTab === 'playlists' && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-900"></div>
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 mt-6">
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg flex flex-col items-center justify-center shadow-sm">
            <h3 className="font-semibold text-lg mb-1">Configuration Required</h3>
            <p className="text-center text-sm">{error}</p>
          </div>
        )}

        {loading && !error && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          </div>
        )}

        {!loading && !error && activeTab === 'videos' && (
          <div className="flex flex-col pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-x-4 sm:gap-y-8">
              {videos.length === 0 ? (
                <div className="col-span-full text-center py-12 text-gray-500">No videos found.</div>
              ) : (
                videos.map((video) => (
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={video.id} 
                    className="group flex flex-col cursor-pointer transition-transform hover:-translate-y-1 duration-200"
                  >
                    <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="pt-3 flex gap-3">
                      <div className="flex-shrink-0">
                        <img src={channelInfo.avatarUrl} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-[#0f0f0f] font-semibold text-sm leading-tight line-clamp-2">
                          {video.title}
                        </h3>
                        <div className="text-[#606060] text-xs mt-1 font-medium">
                          {channelInfo.name}
                        </div>
                        <div className="text-[#606060] text-xs mt-0.5">
                          {video.publishedAt}
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>
            
            {/* Load More Button */}
            {nextPageToken && (
              <div className="mt-10 flex justify-center border-t border-gray-200 pt-6">
                <button 
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="bg-transparent border border-gray-300 text-blue-600 hover:bg-blue-50 hover:border-transparent px-8 py-2 rounded-full font-semibold text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loadingMore ? 'Loading...' : 'Load More'}
                </button>
              </div>
            )}
          </div>
        )}

        {!loading && !error && activeTab === 'playlists' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-x-4 sm:gap-y-8 pb-8">
            {playlists.length === 0 ? (
               <div className="col-span-full text-center py-12 text-gray-500">No playlists found.</div>
            ) : (
              playlists.map((playlist) => (
                <a 
                  key={playlist.id} 
                  href={`https://www.youtube.com/playlist?list=${playlist.id}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col cursor-pointer transition-transform hover:-translate-y-1 duration-200"
                >
                  <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <img
                      src={playlist.thumbnail}
                      alt={playlist.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/80 px-2 py-1 rounded text-white text-xs font-medium flex items-center gap-1">
                      <ListVideo className="w-3 h-3" />
                      {playlist.videoCount}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-[#0f0f0f] font-semibold text-sm leading-tight line-clamp-2">
                      {playlist.title}
                    </h3>
                    <div className="text-[#606060] text-xs mt-1 font-medium hover:text-gray-900 transition-colors">
                      View full playlist
                    </div>
                  </div>
                </a>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
