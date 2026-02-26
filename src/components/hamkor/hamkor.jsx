import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper stillari
import "swiper/css";
import "./hamkor.scss";

// Rasmlar
import Agent from "../imgs/agent.png";
import Fondi from "../imgs/fondi.png";
import Kasb from "../imgs/kasb.png";
import Digi from "../imgs/digi.png";

export default function Hamkorlar() {
  // Asl ma'lumotlar
  const data = [
    { id: 1, logo: Kasb, name: "Kasb" },
    { id: 2, logo: Agent, name: "Agent" },
    { id: 3, logo: Fondi, name: "Fondi" },
    { id: 4, logo: Digi, name: "Digi" },
  ];

  // Loop silliq ishlashi uchun ma'lumotni 3 marta ko'paytirib chiqaramiz
  const hamkorlar = [...data, ...data, ...data];

  return (
    <section className="sponsors">
      <div className="sponsors__container">
        <div className="sponsors__head">
          <h2 className="sponsors__title">Hamkorlarimiz</h2>
          <p className="sponsors__subtitle">
            Ishonchli va yetakchi hamkorlarimiz bilan tanishing
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={5000} // Silliq yurish tezligi (5 sekund)
          slidesPerView={2}
          spaceBetween={20}
          allowTouchMove={false} // Silliq oqim buzilmasligi uchun
          autoplay={{
            delay: 0, // To'xtashlarsiz harakat
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 25 },
            768: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 35 },
            1280: { slidesPerView: 6, spaceBetween: 40 },
          }}
          className="sponsors__slider"
        >
          {hamkorlar.map((h, index) => (
            <SwiperSlide key={`${h.id}-${index}`}>
              <div className="sponsors__card">
                <img
                  src={h.logo}
                  alt={h.name}
                  className="sponsors__logo"
                  draggable="false"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}