import React from 'react';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600', category: 'Classroom' },
    { id: 2, url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600', category: 'Events' },
    { id: 3, url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600', category: 'Infrastructure' },
    { id: 4, url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600', category: 'Student Activities' },
    { id: 5, url: 'https://images.unsplash.com/photo-1511629091441-ee46146481b6?auto=format&fit=crop&q=80&w=600', category: 'Events' },
    { id: 6, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600', category: 'Classroom' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins text-navy-900 mb-6">Gallery</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            A glimpse into the learning environment and activities at Saraswati IAS.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Classroom', 'Events', 'Infrastructure', 'Student Activities'].map((cat, idx) => (
            <button 
              key={idx}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${idx === 0 ? 'bg-navy-900 text-white' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer h-72">
              <img 
                src={img.url} 
                alt={`Gallery image ${img.id}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold border-2 border-white px-4 py-2 rounded-md">View Larger</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
