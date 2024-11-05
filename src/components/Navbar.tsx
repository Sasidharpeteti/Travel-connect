import { Menu, X, Globe, User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Wanderlust</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600">Find Travelers</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Local Guides</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600">Plan Trip</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-700">Find Travelers</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Local Guides</a>
            <a href="#" className="block px-3 py-2 text-gray-700">Plan Trip</a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}