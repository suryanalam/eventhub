
import React, { useState, useMemo } from 'react';
import { SUPPORTED_CITIES } from '../constants';
import { City } from '../types';

interface CitySelectorProps {
  onSelect: (city: City) => void;
  onClose: () => void;
  currentCityId: string | null;
}

const CitySelector: React.FC<CitySelectorProps> = ({ onSelect, onClose, currentCityId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);

  const filteredCities = useMemo(() => {
    return SUPPORTED_CITIES.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.state.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        
        let closestCity = SUPPORTED_CITIES[0];
        let minDistance = Infinity;

        SUPPORTED_CITIES.forEach(city => {
          const d = Math.sqrt(
            Math.pow(city.lat - latitude, 2) + Math.pow(city.lng - longitude, 2)
          );
          if (d < minDistance) {
            minDistance = d;
            closestCity = city;
          }
        });

        if (minDistance > 1.5) {
          alert("You seem to be outside our serviceable area. Please select a city manually.");
        } else {
          onSelect(closestCity);
        }
        setIsDetecting(false);
      },
      (error) => {
        console.error(error);
        alert("Unable to retrieve your location. Please select manually.");
        setIsDetecting(false);
      }
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm px-0 sm:px-4">
      <div className="bg-white w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2.5rem] p-6 shadow-2xl animate-slideUp sm:animate-fadeIn flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">Pick your city</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Find premium services near you</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <button 
          onClick={handleDetectLocation}
          disabled={isDetecting}
          className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-purple-50 text-purple-700 font-bold text-sm mb-6 border border-purple-100 active:scale-95 transition-all shadow-sm"
        >
          {isDetecting ? (
            <div className="animate-spin rounded-full h-4 w-4 border-2 border-purple-700 border-t-transparent" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
          )}
          {isDetecting ? 'Detecting...' : 'Use Current Location'}
        </button>

        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Search by city or state..." 
            className="w-full bg-gray-50 border border-gray-100 rounded-2xl py-4 px-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all font-medium"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-4 top-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto no-scrollbar pb-4">
          {filteredCities.length > 0 ? (
            filteredCities.map(city => (
              <button 
                key={city.id}
                onClick={() => onSelect(city)}
                className={`group flex flex-col items-center justify-center gap-2 p-4 rounded-3xl transition-all border ${currentCityId === city.id ? 'phonepe-bg text-white border-transparent shadow-lg scale-95' : 'bg-white text-gray-700 border-gray-100 hover:border-purple-200 hover:shadow-md'}`}
              >
                <div className={`text-4xl transition-transform group-hover:scale-110 ${currentCityId === city.id ? 'filter brightness-125' : ''}`}>
                  {city.illustration}
                </div>
                <div className="text-center">
                  <p className="text-xs font-black uppercase tracking-tight">{city.name}</p>
                  <p className={`text-[8px] font-bold uppercase tracking-widest opacity-60 ${currentCityId === city.id ? 'text-white' : 'text-gray-400'}`}>
                    {city.state}
                  </p>
                </div>
              </button>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <div className="text-4xl mb-4">📍</div>
              <p className="text-gray-400 text-sm font-black uppercase tracking-widest">We're not here yet</p>
              <p className="text-gray-400 text-[10px] mt-1">Suggest your city to us!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CitySelector;
