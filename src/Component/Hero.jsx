

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
    <div className="w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden shadow-lg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-full md:max-w-2xl text-white space-y-4 px-4 md:px-0">
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