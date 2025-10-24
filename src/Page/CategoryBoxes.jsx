import { Baby, Blocks, BookOpen, Car } from 'lucide-react';
import React from 'react';

const CategoryBoxes = () => {
    return (
        <div>
                <section className="py-10">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Discover toys that bring joy to every age and imagination
          </p>
        </div>

        {/* Category Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="flex justify-center mb-3 text-pink-500">
              <Blocks size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Building Blocks</h3>
            <p className="text-sm text-gray-500">Create & build your world</p>
          </div>

          {/* Dolls */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="flex justify-center mb-3 text-purple-500">
              <Baby size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Dolls</h3>
            <p className="text-sm text-gray-500">Adorable companions for playtime</p>
          </div>

          {/* Vehicles */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="flex justify-center mb-3 text-blue-500">
              <Car size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Vehicles</h3>
            <p className="text-sm text-gray-500">Zoom into fun adventures</p>
          </div>

          {/* Educational */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-yellow-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div className="flex justify-center mb-3 text-yellow-500">
              <BookOpen size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-1">Educational</h3>
            <p className="text-sm text-gray-500">Learn while you play</p>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default CategoryBoxes;