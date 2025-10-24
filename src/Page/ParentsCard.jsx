import { Star } from 'lucide-react';
import React from 'react';

const ParentsCard = () => {
    return (
        <div>
        <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
            What Parents Say
          </h2>
          <p className="text-lg text-gray-600">
            Real reviews from happy families
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full border-2 border-purple-500 mr-3"
              />
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              “Amazing selection! My kids love their new toys. Supporting local has never been easier.”
            </p>
            <p className="font-semibold text-gray-800">Sarah Johnson</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Mike Chen"
                className="w-12 h-12 rounded-full border-2 border-purple-500 mr-3"
              />
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              “Quality toys at great prices. The sellers are friendly and helpful. Highly recommend!”
            </p>
            <p className="font-semibold text-gray-800">Mike Chen</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="flex items-center mb-4">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Emily Rodriguez"
                className="w-12 h-12 rounded-full border-2 border-purple-500 mr-3"
              />
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              “Fast delivery and excellent customer service. ToyTopia is now our go-to toy store!”
            </p>
            <p className="font-semibold text-gray-800">Emily Rodriguez</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default ParentsCard;