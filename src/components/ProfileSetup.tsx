import { Camera, MapPin, Globe, DollarSign, Heart } from 'lucide-react';
import { useState } from 'react';

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-1/3 h-2 rounded-full mx-1 ${
                step >= i ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          {step === 1 && "Let's create your traveler profile"}
          {step === 2 && 'What kind of travel do you enjoy?'}
          {step === 3 && 'Almost there!'}
        </h2>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full">
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Tell us about yourself..."
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 h-32"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Current location"
                className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <select className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500">
                <option>Preferred language</option>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe, label: 'Adventure' },
              { icon: Heart, label: 'Cultural' },
              { icon: MapPin, label: 'Nature' },
              { icon: DollarSign, label: 'Luxury' },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-indigo-600 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500"
                >
                  <Icon className="w-6 h-6 text-indigo-600 mr-3" />
                  <span className="text-gray-700">{item.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Travel Budget Range</h3>
            <input
              type="range"
              className="w-full"
              min="0"
              max="100"
              step="10"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Budget</span>
              <span>Luxury</span>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Verification</h3>
            <p className="text-gray-600 text-sm">
              To ensure safety and trust in our community, please verify your profile:
            </p>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-600">
                <span className="text-gray-700">Verify Email</span>
                <span className="text-sm text-green-600">Completed</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-600">
                <span className="text-gray-700">Phone Number</span>
                <span className="text-sm text-indigo-600">Verify Now</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-600">
                <span className="text-gray-700">ID Verification</span>
                <span className="text-sm text-indigo-600">Verify Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-between">
        {step > 1 && (
          <button
            onClick={() => setStep(step - 1)}
            className="px-6 py-2 text-indigo-600 hover:text-indigo-700"
          >
            Back
          </button>
        )}
        <button
          onClick={() => step < 3 ? setStep(step + 1) : null}
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          {step === 3 ? 'Complete Profile' : 'Continue'}
        </button>
      </div>
    </div>
  );
}