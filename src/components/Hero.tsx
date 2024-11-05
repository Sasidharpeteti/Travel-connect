import { Search, MapPin, Users } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"
          alt="Travel background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>
      
      <div className="relative max-w-7xl mx-auto pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Connect. Explore. Experience.
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Find your perfect travel companion or local guide for authentic, unforgettable adventures around the world.
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-4 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1 relative">
              <Users className="absolute left-3 top-3 text-gray-400" />
              <select className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Looking for...</option>
                <option>Travel Companion</option>
                <option>Local Guide</option>
                <option>Group Trip</option>
              </select>
            </div>
            <button className="bg-indigo-600 text-white px-8 py-2 rounded-md hover:bg-indigo-700 flex items-center justify-center">
              <Search className="mr-2" />
              Search
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { count: '10K+', label: 'Active Travelers' },
            { count: '150+', label: 'Countries' },
            { count: '5K+', label: 'Local Guides' }
          ].map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="text-3xl font-bold text-white">{stat.count}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}