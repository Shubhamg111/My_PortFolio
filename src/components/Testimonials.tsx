import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonials from '../data/testimonials.json'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function TestimonialsSlider() {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetch("/src/data/testimonials.json")            // fetch from public/
//       .then(res => res.json())
//       .then(data => setTestimonials(data))
//       .catch(err => console.error("Error loading testimonials:", err));
//   }, []);

  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center">
        Testimonials
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mt-3 text-center max-w-2xl mx-auto">
        Voices From My Clients and Students
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="mt-12"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="
                max-w-3xl mx-auto
                bg-white dark:bg-gray-800
                border border-black/10 dark:border-white/10
                rounded-2xl shadow-md
                p-8 md:p-10
              "
            >
              <div className="border-l-4 border-blue-500 pl-6">
                <p className="italic text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  “{t.text}”
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {t.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {t.role}
                </p>

                {/* Rating */}
                <div className="flex space-x-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => {
                    const full = i + 1 <= t.rating;
                    const half = !full && i + 0.5 <= t.rating;

                    if (full) return <FaStar key={i} className="w-5 h-5" />;
                    if (half) return <FaStarHalfAlt key={i} className="w-5 h-5" />;
                    return <FaRegStar key={i} className="w-5 h-5 text-gray-400 dark:text-gray-500" />;
                })}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
