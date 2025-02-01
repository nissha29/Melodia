import React from 'react'
import Lata_Mangeshkar from '../assets/Lata-Mangeshkar.png';
import Mohammad_Rafi from '../assets/Mohammad-Rafi.png';
import Shaan from '../assets/Shaan.png';
import KK from '../assets/KK.png';
import Jagjit_Singh from '../assets/Jagjit-Singh.png';
import Sonu_Nigam from '../assets/Sonu-Nigam.png';
import Sunidhi_Chauhan from '../assets/Sunidhi-Chauhan.png';
import Anuradha_Paudwal  from '../assets/Anuradha-Paudwal.png';
import Diljit_Dosanjh from '../assets/Diljit-Dosanjh.png';
import Arijit_Singh from '../assets/Arijit-Singh.png';
import Sharda_Sinha from '../assets/Sharda-Sinha.png';
import Shreya_Ghoshal from '../assets/Shreya-Ghoshal.png';
import AR_Rehman from '../assets/AR-Rehman.png';
import Kishore_Kumar from  '../assets/Kishore-Kumar.png';
import Rahat_Fateh from '../assets/Rahat-Fateh.png';
import Arman_Malik from '../assets/Arman-Malik.png';

const singers = [
  { id: 1, image: Lata_Mangeshkar },
  { id: 2, image: KK },
  { id: 3, image: Shaan },
  { id: 4, image: Mohammad_Rafi },
  { id: 5, image: Jagjit_Singh },
  { id: 6, image: Sonu_Nigam },
  { id: 7, image: Sunidhi_Chauhan },
  { id: 8, image: Anuradha_Paudwal },
  { id: 9, image: Diljit_Dosanjh },
  { id: 10, image: Arijit_Singh },
  { id: 11, image: Sharda_Sinha },
  { id: 12, image: Shreya_Ghoshal },
  { id: 13, image: AR_Rehman },
  { id: 14, image: Rahat_Fateh  },
  { id: 15, image: Kishore_Kumar },
  { id: 16, image: Arman_Malik },
];

export default function HomeHeroBanner() {
  return (
    <div>
      <div className='flex gap-3 px-10 pt-4 w-screen overflow-x-scroll scrollbar-none'>
        <div className='flex animate-scroll gap-3'>
          {[0, 1, 2, 3].map((iteration) => (
            singers.map((singer) => (
              <div 
                className="w-72 h-72 flex" 
                key={`${iteration}-${singer.id}`}
              >
                <img 
                  src={singer.image} 
                  alt={`Singer ${singer.id}`} 
                  className='w-60 h-60 object-cover object-center rounded-full' 
                />
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}
