// components/KenBurnsCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SwiperCore from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

SwiperCore.use([Autoplay, EffectFade]);

const images = [
  'https://cdn.needyreliefafrica.org/SO2_jufv7j.jpg',
  'https://cdn.needyreliefafrica.org/SO9_alow7g.jpg',
  'https://cdn.needyreliefafrica.org/SO6_gssywc.jpg',
];

const KenBurnsCarousel: React.FC = () => {
  return (
    <Swiper
      effect="fade"
      loop
      autoplay={{ delay: 8000, disableOnInteraction: false }}
      className="absolute inset-0 w-full h-full z-0"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-center bg-cover animate-kenburns"
            style={{ backgroundImage: `url(${img})` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default KenBurnsCarousel;
