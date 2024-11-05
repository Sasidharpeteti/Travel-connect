import { Calendar, MapPin, Users, DollarSign, Plus } from 'lucide-react';
import { useState } from 'react';

export default function TripPlanner() {
  const [activities, setActivities] = useState([
    { id: 1, name: 'Visit Eiffel Tower', date: '2024-04-15', cost: 25 },
    { id: 2, name: 'Seine River Cruise', date: '2024-04-16', cost: 35 },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Paris Adventure</h2>
            <div className="flex items-center mt-2 text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Apr 15-20, 2024</span>
              <MapPin className="w-4 h-4 ml-4 mr-2" />
              <span>Paris, France</span>
              <Users className="w-4 h-4 ml-4 mr-2" />
              <span>4 travelers</span>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Share Trip
          </button>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Planned Activities</h3>
                <button className="flex items-center text-indigo-600 hover:text-indigo-700">
                  <Plus className="w-4 h-4 mr-1" />
                  Add Activity
                </button>
              </div>
              
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-600"
                  >
                    <div>
                      <h4 className="font-medium text-gray-900">{activity.name}</h4>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{activity.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-900">{activity.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Travel Notes</h3>
              <textarea
                placeholder="Add notes about your trip..."
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 h-32"
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Trip Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Activities</span>
                  <span className="font-medium">$60</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Accommodation</span>
                  <span className="font-medium">$450</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Transportation</span>
                  <span className="font-medium">$200</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">$710</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    $177.50 per person
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Travel Companions</h3>
              <div className="space-y-3">
                {[
                  { name: 'Sarah Miller', status: 'Confirmed' },
                  { name: 'John Davis', status: 'Pending' },
                  { name: 'Emma Wilson', status: 'Confirmed' },
                ].map((companion, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-medium">
                          {companion.name[0]}
                        </span>
                      </div>
                      <span className="ml-3 text-sm font-medium">
                        {companion.name}
                      </span>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        companion.status === 'Confirmed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {companion.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}