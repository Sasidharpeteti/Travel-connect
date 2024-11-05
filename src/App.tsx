import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProfileSetup from './components/ProfileSetup';
import TripPlanner from './components/TripPlanner';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <div className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Create Your Profile</h2>
            <p className="mt-4 text-xl text-gray-600">
              Tell us about yourself and find your perfect travel companions
            </p>
          </div>
          <ProfileSetup />
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Plan Your Trip</h2>
            <p className="mt-4 text-xl text-gray-600">
              Organize your perfect adventure with our collaborative trip planner
            </p>
          </div>
          <TripPlanner />
        </div>
      </div>
    </div>
  );
}

export default App;