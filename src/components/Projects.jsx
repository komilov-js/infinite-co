import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Reveal from "./Reveal.jsx";
import { Link } from "react-router-dom";
import { projects } from "./context.jsx"; 

export default function Projects() {
  return (
    <section id="projects" className="py-14 md:py-20 bg-ink">
      <div className="container-max">
        <Reveal>
          <div className="text-center text-white">
            <p className="text-[12px] tracking-[.22em] uppercase text-white/70 font-semibold">Portfolio</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-balance">So'nggi loyihalarimiz</h2>
            <p className="mt-3 text-[14px] text-white/70 max-w-[720px] mx-auto">
              Har bir loyiha — biznes ehtiyojidan kelib chiqqan yechim. Dizayn, tezlik va xavfsizlikka alohida e'tibor beramiz.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={18}
            slidesPerView={1.05}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2.05 },
              1024: { slidesPerView: 3 },
            }}
          >
            {projects.map((p, i) => (
              <SwiperSlide key={p.slug}>
                <Reveal delay={0.04 * i}>
                  <Link to={`/projects/${p.slug}`} className="block h-full">
                    <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-soft hover:border-white/20 transition h-full flex flex-col">
                      <div className="relative h-56 flex-shrink-0">
                        <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                        <div className="absolute left-4 top-4 text-[12px] font-semibold px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white">
                          {p.tag}
                        </div>

                        <div className="absolute right-4 top-4 h-11 w-11 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center">
                          <ArrowUpRight size={18} />
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-grow">
                        <div className="text-white font-extrabold truncate">{p.title}</div>
                        
                        {/* ✅ SHU YERDA LINE-CLAMP ISHLATILDI */}
                        <div className="mt-2 text-[13px] text-white/70 line-clamp-2 min-h-[40px]">
                          {p.desc}
                        </div>

                        <div className="mt-auto pt-4">
                          <span className="rounded-xl bg-sky-600 text-white px-4 py-2 text-[13px] font-semibold inline-block">
                            Batafsil
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* ✅ Slider tagidan keyin button */}
<div className="mt-10 flex justify-center">
  <Link
    to="/projects"
    className="inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/15 px-6 py-3 text-white font-semibold hover:bg-white/15 hover:border-white/25 transition"
  >
    Barcha loyihalar
    <ArrowUpRight size={18} />
  </Link>
</div>
      </div>
    </section>
  );
}