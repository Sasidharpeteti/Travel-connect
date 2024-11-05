import { Users, Map, MessageCircle, Shield, Compass, Calendar } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Smart Matching',
    description: 'Find travel companions based on shared interests, travel style, and compatibility scores.'
  },
  {
    icon: Shield,
    title: 'Safe Connections',
    description: 'Start with incognito chats and gradually build trust through our verified profile system.'
  },
  {
    icon: Map,
    title: 'Local Insights',
    description: 'Connect with experienced local guides for authentic, off-the-beaten-path experiences.'
  },
  {
    icon: MessageCircle,
    title: 'Group Planning',
    description: 'Collaborate with travel buddies to create the perfect itinerary together.'
  },
  {
    icon: Compass,
    title: 'AI Travel Assistant',
    description: 'Get personalized recommendations and travel tips from our smart AI companion.'
  },
  {
    icon: Calendar,
    title: 'Trip Journal',
    description: 'Document and share your adventures with an interactive travel diary.'
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need for perfect travel connections
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform brings together all the tools you need to find companions, plan trips, and create unforgettable memories.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                <div className="relative bg-white p-6 rounded-xl">
                  <Icon className="h-8 w-8 text-indigo-600" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}