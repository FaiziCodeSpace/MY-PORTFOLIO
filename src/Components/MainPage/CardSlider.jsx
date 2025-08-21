import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import "./CardSlider.css";

const slides = [
  { icon: <FaReact className="icon react" />, text: "Full control on building a scalable React.js web app 🚀" },
  { icon: <FaNodeJs className="icon node" />, text: "Efficient APIs with Node.js for maximum performance ⚡" },
  { icon: <FaDatabase className="icon db" />, text: "Seamless data handling with MongoDB & Mongoose 📊" },
];

export default function CardSlider() {
  const [iconSwiper, setIconSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);

  // Initial sync when both ready
  useEffect(() => {
    if (iconSwiper && textSwiper) {
      textSwiper.slideToLoop(iconSwiper.realIndex || 0, 0);
    }
  }, [iconSwiper, textSwiper]);

  return (
    <div className="card grab-container">
      {/* Fixed TV Screen (icons slide inside) */}
      <div className="slider-box">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setIconSwiper}
          onSlideChange={(s) => {
            if (textSwiper && textSwiper.realIndex !== s.realIndex) {
              textSwiper.slideToLoop(s.realIndex);
            }
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={500}
          loop={true}
          allowTouchMove={true}
          className="swiper-icon"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="slide-icon">{slide.icon}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Text (slides below; pagination rendered here) */}
      <div className="text-box">
        <Swiper
          modules={[Pagination]}
          onSwiper={setTextSwiper}
          onSlideChange={(s) => {
            if (iconSwiper && iconSwiper.realIndex !== s.realIndex) {
              iconSwiper.slideToLoop(s.realIndex);
            }
          }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
          }}
          speed={500}
          loop={true}
          allowTouchMove={false}
          className="swiper-text"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <p>{slide.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom pagination BELOW text */}
      <div className="custom-pagination"></div>
    </div>
  );
}
