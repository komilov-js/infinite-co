import React from "react";
import Reveal from "./Reveal.jsx";
import { Link } from "react-router-dom";

export default function PromoVideo() {
  return (
    <section className="pt-10 md:pt-14">
      <div className="container-max">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl shadow-soft border border-slate-200">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80)",
              }}
            />
            <div className="absolute inset-0 bg-ink/55" />
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-500 blur-blob" />

            <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-[620px] text-white">
                <p className="text-[12px] tracking-[.22em] uppercase text-white/70">
                  Biz haqimizda
                </p>

                <h3 className="mt-3 text-xl md:text-2xl font-extrabold leading-tight text-balance">
                  Biz nafaqat dastur yaratamiz — biz biznesingizni transformatsiya qilamiz.
                  Avtomatlashtirilgan tizimlar, xavfsiz infratuzilma va aqlli algoritmlar yordamida maksimal natijaga erishamiz
                </h3>

                <p className="mt-3 text-white/80 text-[14px]">
                  Analitika, boshqaruv paneli, integratsiyalar va xabarnomalar —
                  hammasi bir joyda.
                </p>
              </div>

              <Link
                to="/about"
                className="rounded-lg bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 text-[13px] font-semibold flex items-center gap-2"
              >
                Batafsil
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}