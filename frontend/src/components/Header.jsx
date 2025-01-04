import React, { useState } from 'react';
// import { IoSearchOutline } from 'react-icons/io5';

const Header = () => {
  const [active, setActive] = useState('');

  return (
    <div className="w-[60%] flex justify-between items-center h-8 pt-14">
      <div className="w-[45%] bg-primary-dark bg-opacity-45 flex gap-2 p-[10px] rounded-full">
        {/* <IoSearchOutline className="text-2xl text-white mx-2" /> */}
        <input
          className="w-full bg-transparent outline-none placeholder:font-bold font-CabinCondensed text-white"
          type="text"
        />
      </div>
      <div className="w-[55%]">
        <ul className="flex w-full heading ml-20 text-white gap-14 justify-evenly">
          {['Music', 'Artist', 'Genres', 'Favorites'].map((item) => (
            <li
              key={item}
              className={`font-bold text-lg hover:text-primary-pink cursor-pointer ${
                active === item ? 'text-primary-pink' : 'text-white'
              }`}
              onClick={() => setActive(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;