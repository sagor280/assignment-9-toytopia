// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { Autoplay } from "swiper/modules";
// import { Navigation, Pagination } from "swiper/modules";

// const Hero = () => {
//   const slides = [
//     'https://i.postimg.cc/QNvhBnVx/fluffy-toy-texture-close-up.jpg',
//     "https://cdn-icons-png.flaticon.com/512/616/616408.png",
//     "https://cdn-icons-png.flaticon.com/512/3082/3082032.png",
//   ];

//   return (
//     <section className="w-full max-w-7xl mx-auto py-8">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="rounded-lg overflow-hidden shadow-lg"
//       >
//         {slides.map((img, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-72 md:h-96 object-contain bg-white p-4"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Hero;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Hero = () => {

  const slides = [
    {
      title: "Discover Amazing Toys",
      subtitle: "Support local sellers, delight your kids",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=1600&h=600&fit=crop",
      cta: "Browse Toys"
    },
    {
      title: "Quality & Safety First",
      subtitle: "Every toy vetted by local experts",
      image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=1600&h=600&fit=crop",
      cta: "Shop Now"
    },
    {
      title: "Educational Fun",
      subtitle: "Learning through play for all ages",
      image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=1600&h=600&fit=crop",
      cta: "Explore Learning"
    }
  ];

  return (
    <div className="w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 `bg-gradient-to-r` from-black/70 to-black/30 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl text-white space-y-4" data-aos="fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200">
                      {slide.subtitle}
                    </p>
                
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;