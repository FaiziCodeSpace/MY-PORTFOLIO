// cardSlider.jsx
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiGraphql } from "react-icons/si";

// IMPORTANT: bring in the ParticleCard + the shared glow CSS
import { ParticleCard } from "./experienceSlider"; // <-- adjust path if needed
import "./CardSlider.css";
import "./experienceSlider.css"; // ensures exp-card glow styles are present

const slides = [
  { icon: <FaReact className="icon react" />, text: "Full control on building scalable React.js web apps" },
  { icon: <FaNodeJs className="icon node" />, text: "Efficient APIs with Node.js for maximum performance" },
  { icon: <SiExpress className="icon express" />, text: "Backend routing and middleware with Express.js" },
  { icon: <SiMongodb className="icon mongo" />, text: "Seamless data handling with MongoDB & Mongoose" },
  { icon: <SiTailwindcss className="icon tailwind" />, text: "Modern responsive designs with Tailwind CSS" },
  { icon: <FaJsSquare className="icon js" />, text: "Solid foundation in JavaScript (ES6+)" },
  { icon: <FaCss3Alt className="icon css" />, text: "Stylish layouts with CSS3 and animations" },
  { icon: <SiGraphql className="icon graphql" />, text: "Flexible data querying with GraphQL" },
  { icon: <FaGithub className="icon github" />, text: "Version control & collaboration using Git/GitHub" },
];

export default function CardSlider() {
  const [iconSwiper, setIconSwiper] = useState(null);
  const [textSwiper, setTextSwiper] = useState(null);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const dragged = useRef(false);

  // Sync initially
  useEffect(() => {
    if (iconSwiper && textSwiper) {
      textSwiper.slideToLoop(iconSwiper.realIndex || 0, 0);
    }
  }, [iconSwiper, textSwiper]);

  // Drag handlers (unchanged)
  const handlePointerDown = (e) => {
    setDragging(true);
    dragged.current = false;
    startX.current = e.clientX ?? e.touches?.[0].clientX ?? 0;
    iconSwiper?.autoplay?.stop();
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    const x = e.clientX ?? e.touches?.[0].clientX ?? 0;
    const delta = x - startX.current;
    const THRESHOLD = 20;
    if (!dragged.current && Math.abs(delta) > THRESHOLD) {
      if (delta < 0) iconSwiper.slideNext();
      else iconSwiper.slidePrev();
      dragged.current = true;
    }
  };

  const handlePointerUp = () => {
    setDragging(false);
    dragged.current = false;
    iconSwiper?.autoplay?.start();
  };

  return (
    <ParticleCard
      // Reuse your existing "card" look and add the glow variants
      className="card exp-card exp-card--border-glow exp-card--angled"
      style={{ "--glow-color": "132, 0, 255" }}
      // Keep the fancy stuff, but pause tilt/magnetism during drag to avoid fighting your swipe logic
      disableAnimations={false}
      particleCount={12}
      glowColor="132, 0, 255"
      enableTilt={!dragging}
      enableMagnetism={!dragging}
      clickEffect
    >
      <div
        className="drag-surface grab-container"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Icon Slider */}
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
            allowTouchMove={false} // handled via whole card drag
            className="swiper-icon"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="slide-icon">{slide.icon}</div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Text Slider */}
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
              renderBullet: (index, className) => `<span class="${className}"></span>`,
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

        {/* Pagination */}
        <div className="custom-pagination"></div>
      </div>
    </ParticleCard>
  );
}
