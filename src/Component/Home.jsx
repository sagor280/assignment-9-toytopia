import React from "react";
import { Link, useLoaderData } from "react-router";
import Hero from "./Hero";
import { Heart, Shield, Star, Truck } from "lucide-react";
import ToyCard from "../Page/ToyCard";




const Home = () => {
     const toys = useLoaderData();
      const popularToys = toys.slice(0, 6);
    
  return (
    <div className="bg-[#f8f5ef] min-h-screen  ">
  <section className="px-4 py-6 md:p-10">
      <Hero></Hero>
  </section>
     {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg">Safe & Tested</h3>
              <p className="text-sm text-muted-foreground">All toys meet safety standards</p>
            </div>
            <div className="text-center space-y-4" >
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg">Top Quality</h3>
              <p className="text-sm text-muted-foreground">Premium toys from trusted sellers</p>
            </div>
            <div className="text-center space-y-4" >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick local delivery options</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-bold text-lg">Support Local</h3>
              <p className="text-sm text-muted-foreground">Help local businesses thrive</p>
            </div>
          </div>
        </div>
      </section>

         {/* Popular Toys Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12" >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Popular Toys
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the most loved toys in our collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularToys.map((toy) => (
            <ToyCard key={toy.toyId} {...toy} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/toys"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition"
          >
            View All Toys
          </Link>
        </div>
      </section>




    </div>
  );
};

export default Home;
