import React from "react";
import Reveal from "./Reveal.jsx";
import Accordion from "./Accordion.jsx";
import { FiBox, FiUsers, FiGlobe, FiCode } from "react-icons/fi";

const stats = [
  { label: "Muvaffaqiyatli loyihalar", value: "40+", icon: <FiBox className="text-sky-500" />, desc: "CRM, E-commerce va murakkab tizimlar" },
  { label: "Mamnun mijozlar", value: "25+", icon: <FiUsers className="text-emerald-500" />, desc: "O'zbekiston va xalqaro bozorlarda" },
  { label: "Yozilgan kod satrlari", value: "500k+", icon: <FiCode className="text-purple-500" />, desc: "Toza va optimallashgan kod bazasi" },
  { label: "Sohada tajriba", value: "4 yil+", icon: <FiGlobe className="text-amber-500" />, desc: "Doimiy rivojlanish va yangiliklar" },
];

const faq = [
  { q: "Loyiha qancha vaqtda tayyor bo'ladi?", a: "Oddiy landing 7–14 kun, CRM/Platforma 4–10 hafta. Aniq muddat talabga qarab belgilanadi." },
  { q: "To'lov qanday bo'ladi?", a: "Odatda 50/50: start uchun avans va yakunda. Katta loyihalarda bosqichma-bosqich." },
  { q: "Texnik ko'mak bormi?", a: "Ha. 24/7 monitoring va doimiy texnik qo'llab-quvvatlash xizmatimiz mavjud." },
  { q: "Xalqaro loyihalar bilan ishlaysizlarmi?", a: "Ha, bizda masofaviy ishlash va xalqaro standartlar bo'yicha tajriba yetarli." },
];

export default function ExpertsAndFaq() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Chap taraf: Statistikalar */}
          <div className="relative">
            <Reveal>
              <div className="mb-10 text-center lg:text-left">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                  Biznesingizni <span className="text-sky-600">raqamlar</span> bilan o'stiramiz
                </h2>
                <p className="mt-4 text-slate-500 text-lg">
                  Har bir loyiha biz uchun shunchaki ish emas, bu — o'sish ko'rsatkichi.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((item, i) => (
                <Reveal key={item.label} delay={0.1 * i}>
                  <div className="p-6 rounded-[2rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 group">
                    <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-black text-slate-900">{item.value}</div>
                    <div className="font-bold text-slate-700 mt-1">{item.label}</div>
                    <p className="text-[12px] text-slate-500 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            
            {/* Orqa fondagi bezak element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-50/50 rounded-full blur-3xl opacity-50" />
          </div>

          {/* O'ng taraf: FAQ va Tech Stack */}
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-10 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-2 w-10 bg-sky-600 rounded-full" />
                  <h3 className="text-xl font-bold text-slate-900">Ko'p beriladigan savollar</h3>
                </div>
                
                <Accordion items={faq} />

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[.2em] mb-5 text-center">Texnologik quvvatimiz:</p>
                  <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all">
                    {/* Bu yerga mashhur logotiplar nomini yozib chiqdim */}
                    <span className="font-black text-xl">React</span>
                    <span className="font-black text-xl">Node.js</span>
                    <span className="font-black text-xl">Python</span>
                    <span className="font-black text-xl">Docker</span>
                    <span className="font-black text-xl">AWS</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}