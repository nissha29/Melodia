import React from 'react';

const AddSong = () => {
  const genres = [
    'Bollywood', 'Classical', 'Devotional', 'Folk', 'Ghazal', 'Bhajan', 'Qawwali',
    'Indie Pop', 'Sufi', 'Punjabi', 'Bhangra', 'Carnatic', 'Hindustani', 'Fusion',
    'Regional Film Songs', 'Instrumental', 'Wedding Songs', 'Dance Numbers',
    'Patriotic', 'Rabindra Sangeet'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full max-w-md bg-primary-bg bg-opacity-100 rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Add New Song</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Song Title
          </label>
          <input 
            type="text"
            className="w-full px-3 py-2 text-white bg-transparent border border-[#997095] rounded-md focus:outline-none focus:border-[#997095]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Artist Name
          </label>
          <input 
            type="text"
            className="w-full px-3 py-2 text-white bg-transparent border border-[#997095] rounded-md focus:outline-none focus:border-[#997095]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Genre
          </label>
          <select 
            className="w-full px-3 py-2 text-primary-bg bg-transparent border border-[#997095] rounded-md focus:outline-none focus:border-[#997095]"
          >
            <option value="">Select genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Track File
          </label>
          <input 
            type="file"
            accept="audio/*"
            className="w-full px-3 py-2 text-white border border-[#997095] rounded-md focus:outline-none focus:border-[#997095]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Cover Image
          </label>
          <input 
            type="file"
            accept="image/*"
            className="w-full px-3 py-2 text-white border border-[#997095] rounded-md focus:outline-none focus:border-[#997095]"
          />
        </div>
        <button 
          type="submit"
          className="w-full px-4 py-2 bg-[#6B4C68] text-white rounded-md hover:bg-[#997095] transition-colors"
        >
          Add Song
        </button>
      </form>
    </div>
  );
};

export default AddSong;