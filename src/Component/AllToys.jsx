import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCard from '../Page/ToyCard';

const AllToys = () => {
    const toysData = useLoaderData();
    return (
       <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            All Toys
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of amazing toys
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {toysData.map((toy) => (
            <ToyCard key={toy.toyId} {...toy} />
          ))}
        </div>
      </div>
    </div>
    );
};

export default AllToys;