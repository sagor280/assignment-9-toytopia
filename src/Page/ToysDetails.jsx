import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navber";
import { useLoaderData, useParams } from "react-router";
import ToysDetailsCard from "./ToysDetailsCard";

const ToysDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [toy, setToy] = useState({});

  useEffect(() => {
    if (data && id) {
      const toyDetails = data.find((singleToy) => singleToy.toyId == id);
      setToy(toyDetails || {});
    }
  }, [data, id]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-4">
              <img
                src={toy?.pictureURL}
                alt={toy?.toyName}
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>

            {/* Toy Info Card Component */}
            <ToysDetailsCard toy={toy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysDetails;
