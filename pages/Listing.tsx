
import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MOCK_SERVICES, CATEGORIES } from '../constants';

const Listing: React.FC = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const initialCategory = query.get('category');

  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'none'>('none');

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredServices = useMemo(() => {
    let list = [...MOCK_SERVICES];
    if (selectedCategory) {
      list = list.filter(s => s.category === selectedCategory);
    }
    if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      list.sort((a, b) => a.price - b.price);
    }
    return list;
  }, [selectedCategory, sortBy]);

  return (
    <div className="flex flex-col min-h-screen animate-fadeIn pb-20">
      {/* Filter Bar - Improved UI and Persistence */}
      <div className="sticky top-16 bg-gray-50/80 backdrop-blur-md z-40 py-4 px-4 md:px-0 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${!selectedCategory ? 'phonepe-bg text-white' : 'bg-white text-gray-600 border border-gray-100'}`}
            >
              All Services
            </button>
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all shadow-sm ${selectedCategory === cat.id ? 'phonepe-bg text-white' : 'bg-white text-gray-600 border border-gray-100'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sort By</label>
            <select 
              className="text-xs font-bold bg-white border border-gray-200 rounded-xl px-4 py-2 outline-none shadow-sm focus:ring-2 focus:ring-purple-200 transition-all cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="none">Default</option>
              <option value="rating">Best Rated</option>
              <option value="price">Lowest Price First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="px-4 md:px-0 mt-6 mb-4">
        <h2 className="text-xl font-black text-gray-800 uppercase tracking-tight">
          {selectedCategory ? `${selectedCategory}s` : 'All Services'}
          <span className="ml-2 text-sm font-bold text-gray-400 normal-case">({filteredServices.length} found)</span>
        </h2>
      </div>

      {/* List Grid - Responsive columns */}
      <div className="px-4 md:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div 
              key={service.id} 
              onClick={() => navigate(`/detail/${service.id}`)}
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 group cursor-pointer transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl text-[10px] font-black phonepe-text shadow-md uppercase tracking-wider z-10">
                  {service.category}
                </div>
                <button className="absolute top-4 right-4 bg-white/30 hover:bg-white/50 backdrop-blur-md p-2.5 rounded-full transition-all active:scale-90 z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-black text-gray-800 leading-tight group-hover:phonepe-text transition-colors">{service.name}</h3>
                    <div className="flex items-center gap-1 text-xs font-bold text-yellow-600 bg-yellow-50 px-2.5 py-1 rounded-lg border border-yellow-100">
                      ⭐ {service.rating}
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 font-bold flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {service.location}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-50 mt-6 pt-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-0.5">Starting at</span>
                    <span className="text-xl font-black phonepe-text">₹{service.price.toLocaleString()}</span>
                  </div>
                  <div className="bg-purple-50 text-purple-700 p-2.5 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-400">
            <div className="text-6xl mb-4 opacity-20">🔍</div>
            <p className="font-bold text-lg">No services found in this category.</p>
            <button onClick={() => setSelectedCategory(null)} className="mt-4 phonepe-text font-bold underline">Clear filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
