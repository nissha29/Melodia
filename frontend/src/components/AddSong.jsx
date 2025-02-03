import React, { useState } from 'react';
import URL from '../../constants.js'
import axios from 'axios';
import LoadingButton from './LoadingButton.jsx';

const AddSong = ({ setIsOpen }) => {

  const genres = [
    'Bollywood', 'Classical', 'Marathi', 'Folk', 'Ghazal', 'Bhajan', 'Bhojpuri',
    'Indie Pop', 'Punjabi', 'Hindustani', 'Fusion','Regional Songs', 'Instrumental', 'Wedding Songs', 'Dance Numbers',
    'Patriotic',
  ];
  const [formData, setFormData] = useState({
    songTitle: '',
    artistName: '',
    genre: '',
    track: '',
    image: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if(e.target.type === 'text' || e.target.type === 'select-one'){
      setFormData((prev)=>{
        return {
          ...prev,
          [e.target.name]: e.target.value,
        }
      })
    }
    else{
      setFormData((prev)=>{
        return {
          ...prev,
          [e.target.name]: e.target.files[0],
        }
      })
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = new FormData();
    data.append('track', formData.track); 
    data.append('image', formData.image); 
    data.append('songTitle', formData.songTitle);
    data.append('artistName', formData.artistName);
    data.append('genre', formData.genre);
    try{
      await axios.post(
        `${URL}/api/track`, 
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },  
          withCredentials: true,
        },
      );
      setIsLoading(false);
      setIsOpen(false);
      setFormData({
        songTitle: '',
        artistName: '',
        genre: '',
        track: '',
        image: '',
      });
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-md bg-[#0f1214] shadow-sm shadow-primary-text p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">Add New Track</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Song Title
          </label>
          <input 
            onChange={handleChange}
            type="text"
            name='songTitle'
            className="w-full px-3 py-2 text-white bg-transparent border border-[#997095] rounded-md focus:outline-none focus:border-white placeholder-gray-600 border-opacity-25"
            placeholder='kabhi kabhi mere dil mein'
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Artist Name
          </label>
          <input 
            onChange={handleChange}
            type="text"
            name='artistName'
            className="w-full px-3 py-2 text-white bg-transparent border border-[#997095] rounded-md focus:outline-none focus:border-white placeholder-gray-600 border-opacity-25"
            placeholder='Lata Mangeshkar'
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Genre
          </label>
          <select 
            onChange={handleChange}
            className="w-full px-3 py-2 text-white bg-[#0f1214] border border-[#997095] rounded-md focus:outline-none focus:border-white border-opacity-25 scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent"
            name='genre'
            required
          >
            <option value="">Select genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre} className='bg-[#0f1214]'>
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
            onChange={handleChange}
            type="file"
            name='track'
            accept="audio/*"
            className="w-full px-3 py-2 text-white border border-[#997095] rounded-md focus:border-white focus:outline-none border-opacity-25"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#997095] mb-1">
            Cover Image
          </label>
          <input 
            onChange={handleChange}
            type="file"
            name='image'
            accept="image/*"
            className="w-full px-3 py-2 text-white border border-[#997095] rounded-md focus:outline-none focus:border-white border-opacity-25"
            required
          />
        </div>
        <LoadingButton isLoading={isLoading}>
            Add Track
        </LoadingButton>
      </form>
    </div>
  );
};

export default AddSong;