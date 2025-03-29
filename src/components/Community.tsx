import React from 'react';
import { MessageCircleIcon, UserIcon, PhoneIcon } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      title: "Best storage tank for small garden",
      author: "GreenThumb",
      replies: 12,
      preview: "I'm looking for recommendations on the best size tank for a 100m² garden..."
    },
    {
      title: "First-time installation tips",
      author: "RainCollector",
      replies: 23,
      preview: "Planning my first rainwater system, what should I watch out for?"
    },
    {
      title: "Filter maintenance schedule",
      author: "WaterWise",
      replies: 8,
      preview: "How often should I replace my sediment filters? I've noticed..."
    }
  ];

  const experts = [
    {
      name: "Sarah Johnson",
      specialty: "System Design",
      experience: "15+ years"
    },
    {
      name: "Mike Chen",
      specialty: "Installation",
      experience: "10+ years"
    },
    {
      name: "Emma Williams",
      specialty: "Maintenance",
      experience: "8+ years"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <MessageCircleIcon className="h-8 w-8 text-blue-600" />
        <h2 className="text-2xl font-bold">Community Forum</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Discussions</h3>
          <div className="space-y-4">
            {discussions.map((discussion, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-600">{discussion.title}</h4>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <UserIcon className="h-4 w-4 mr-1" />
                  <span>{discussion.author}</span>
                  <span className="mx-2">•</span>
                  <span>{discussion.replies} replies</span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{discussion.preview}</p>
                <button className="mt-3 text-sm text-blue-600 hover:text-blue-700">
                  Join Discussion →
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Expert Consultants</h3>
          <div className="space-y-4">
            {experts.map((expert, index) => (
              <div key={index} className="bg-white border rounded-lg p-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">{expert.name}</h4>
                    <p className="text-sm text-gray-600">{expert.specialty}</p>
                    <p className="text-sm text-gray-500">{expert.experience} experience</p>
                    <button className="mt-2 flex items-center text-sm text-blue-600 hover:text-blue-700">
                      <PhoneIcon className="h-4 w-4 mr-1" />
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold mb-2">Join Our Community</h3>
        <p className="text-gray-600 mb-4">
          Get expert advice, share your experience, and connect with fellow rainwater harvesting enthusiasts.
        </p>
        <div className="flex space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;