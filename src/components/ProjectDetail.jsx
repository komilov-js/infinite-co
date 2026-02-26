import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "./context.jsx";

// ✅ Swiper komponentlari va stillari
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

  const allImages = useMemo(() => {
    if (!project) return [];
    const gallery = project.gallery || [];
    return [project.img, ...gallery].filter(Boolean);
  }, [project]);

  if (!project) {
    return (
      <section className="pt-24 pb-16 bg-white">
        <div className="container-max text-center px-4">
          <h1 className="text-2xl font-extrabold text-slate-900">
            Project topilmadi
          </h1>
          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 text-slate-900 font-semibold hover:opacity-70"
          >
            <ArrowLeft size={18} /> Bosh sahifaga qaytish
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-24 pb-16 bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-800 font-semibold mb-6 hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={18} /> Orqaga
        </Link>

        {/* ✅ HERO SLIDER */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={allImages.length > 1}
            className="w-full h-[38vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh]"
          >
            {allImages.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover select-none"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Qora shaffof overlay */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

          {/* ✅ Title + Tag */}
          <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-4 right-4 sm:left-8 sm:right-8 md:left-12 md:right-12 z-20 text-white pointer-events-none">
            {project.tag && (
              <div className="text-[10px] sm:text-[11px] uppercase tracking-widest font-bold px-3 sm:px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md inline-flex border border-white/15 mb-3 sm:mb-4">
                {project.tag}
              </div>
            )}

            <h1 className="font-black leading-tight drop-shadow-lg text-2xl sm:text-3xl md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>

        {/* ✅ PASTKI MA'LUMOTLAR */}
        <div className="mt-10">
          {/* ✅ Description (ranglarsiz) */}
          {project.desc ? (
            <div className="mt-8">
              <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                {/* tepada oddiy chiziq */}
                <div className="h-[1px] w-full bg-slate-200" />

                <div className="p-6 sm:p-8">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-3">
                    Loyiha haqida
                  </h3>

                  <p
                    className="
                      text-slate-700 leading-relaxed font-medium
                      text-[15px] sm:text-[16px] md:text-[18px]
                      max-w-none overflow-hidden
                    "
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {project.desc}
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          {/* ✅ Stack ham slider kengligida */}
          {project.stack?.length ? (
            <div className="mt-6 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50">
              <h3 className="font-black text-slate-900 text-lg mb-4">
                Texnologik stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] sm:text-[13px] font-bold px-3 sm:px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {/* ✅ Button (ranglarsiz) */}
          {project.url && (
            <div className="mt-10">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-[13px] sm:text-sm font-bold hover:opacity-90 transition"
              >
                Loyihani ko‘rish <ExternalLink size={18} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}