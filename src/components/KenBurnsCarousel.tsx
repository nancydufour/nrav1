// components/KenBurnsCarousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import SwiperCore from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';

SwiperCore.use([Autoplay, EffectFade]);

const images = [
  'https://unsplash.com/photos/QdK6aujOLYs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8aGFwcHklMjBhZnJpY2FuJTIwY2hpbGRyZW58ZW58MHx8fHwxNzU1NjI0NzE4fDA&force=true',
  'https://unsplash.com/photos/7MD4DR9jbP0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGhhcHB5JTIwYWZyaWNhbiUyMGNoaWxkcmVufGVufDB8fHx8MTc1NTYyNDcxOHww&force=true',
  'https://unsplash.com/photos/lPPkJ4NfQtQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGhhcHB5JTIwYWZyaWNhbiUyMGNoaWxkcmVufGVufDB8fHx8MTc1NTYyNDgxN3ww&force=true',
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
