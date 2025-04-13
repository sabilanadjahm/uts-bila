'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectC() {
  const images = [
    '/images/project-c/1.png',
    '/images/project-c/2.png',
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Project C</h1>
        <p className="mb-10 text-center">
          Aplikasi sederhana untuk pencataan penjualan listrik menggunakan apk foxPro.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg overflow-hidden shadow-md"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Project C screenshot ${index + 1}`} className="w-full h-auto object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
