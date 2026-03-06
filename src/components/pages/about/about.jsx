import React from "react";
import Reveal from "../../Reveal";
import { CheckCircle2, ArrowDown, Award, Zap, Globe, Shield, Monitor, Smartphone, MessageSquare, Settings, Lock } from "lucide-react";

export default function About() {
  return (
    <section className="bg-white overflow-hidden">
      {/* 1. HERO IMAGE SECTION */}
      <div className="relative h-[65vh] md:h-[80vh] w-[95%] mx-auto mt-6">
        <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" 
            alt="Infinite Co Workspace"
            className="w-full h-full object-cover grayscale-[10%]"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <Reveal>
            <div className="relative">
              {/* H1 orqasidagi shaffof fon */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl -inset-y-4 -inset-x-8 md:-inset-y-8 md:-inset-x-12 border border-white/20" />
              <h1 className="relative z-10 text-5xl md:text-9xl font-black text-white tracking-tighter drop-shadow-lg">
                INFINITE <span className="italic font-light opacity-90 text-sky-400">CO.</span>
              </h1>
            </div>

            <div className="mt-12 flex flex-col items-center gap-3 text-white/80 relative z-10">
              <p className="text-xs tracking-[0.3em] uppercase font-bold">Innovatsion yechimlar</p>
              <ArrowDown size={14} className="animate-bounce" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* 2. MAIN CONTENT SECTION */}
      <div className="container-max pb-32 -mt-16 relative z-20">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* LEFT SIDE: STORY */}
            <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[3rem] p-8 md:p-16 shadow-sm">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-8 text-sky-600">
                  <div className="h-1 w-12 bg-sky-600 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Kompaniya haqida</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                  Biz haqimizda
                </h2>
                
                <div className="space-y-6 text-slate-600 text-[17px] leading-relaxed">
                  <p>
                    <span className="text-slate-900 font-bold">“INFINITE CO” MCHJ</span> 2022-yil 7-oktabr kuni tashkil etilgan bo‘lib, 
                    2022-yil 19-dekabr sanasidan boshlab <span className="text-sky-600 font-semibold">"IT Park Uzbekistan"</span> rezidenti sifatida faoliyat yuritib kelmoqda.
                  </p>
                  <p>
                    Kompaniyamiz qisqa vaqt ichida o‘zining ishonchli va innovatsion yondashuvi bilan ko‘plab tashkilotlar uchun zamonaviy dasturiy yechimlar ishlab chiqdi. 
                    Bizning asosiy maqsadimiz — biznes jarayonlarni raqamlashtirish va mijozlarimizga yuqori samaradorlik olib keladigan IT mahsulotlarni yaratishdir.
                  </p>
                </div>

                {/* YO'NALISHLAR GRID */}
                <div className="mt-16 pt-12 border-t border-slate-50">
                  <h3 className="text-xl font-bold text-slate-900 mb-8 uppercase tracking-wider">Asosiy faoliyat yo‘nalishlarimiz:</h3>
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      { icon: <Globe size={18} />, text: "Veb-sayt va veb-platformalar" },
                      { icon: <Monitor size={18} />, text: "Desktop (kompyuter) dasturlar" },
                      { icon: <Smartphone size={18} />, text: "Mobil ilovalar (Android/iOS)" },
                      { icon: <MessageSquare size={18} />, text: "Telegram bot va tizimlar" },
                      { icon: <Settings size={18} />, text: "Individual (custom) dasturlar" },
                      { icon: <Lock size={18} />, text: "Axborot xavfsizligi" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-slate-700 hover:text-sky-600 transition-colors group">
                        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-sky-50 transition-colors">
                          {item.icon}
                        </div>
                        <span className="text-sm font-semibold">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: STATS & MISSION */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-900 rounded-[3rem] p-10 text-white h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-6 italic tracking-tight underline decoration-sky-500 underline-offset-8">Maqsadimiz</h3>
                   <p className="text-slate-400 leading-relaxed text-[15px]">
                      Har bir loyiha biz uchun oddiy buyurtma emas — bu hamkorlik va mas’uliyatdir. Biz zamonaviy arxitektura asosida kengaytiriladigan tizimlar yaratamiz.
                   </p>
                </div>
                
                <div className="mt-12 space-y-8 relative z-10">
                   <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                      <div className="text-5xl font-black tracking-tighter">50<span className="text-sky-500">+</span></div>
                      <p className="text-[10px] uppercase text-slate-500 tracking-widest mt-2">Muvaffaqiyatli loyihalar</p>
                   </div>
                   <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                      <div className="text-5xl font-black tracking-tighter text-sky-400">IT Park</div>
                      <p className="text-[10px] uppercase text-slate-500 tracking-widest mt-2">Rasmiy rezidentlik</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* TECH STACK STRIP */}
        <div className="mt-24">
          <div className="flex flex-col items-center mb-10">
            <div className="h-px w-12 bg-slate-200 mb-4" />
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">
              Texnologik Stekimiz
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 opacity-40 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 px-4">
            {[
              "Backend","Frontend",
              "DRF", "API Integration", "Flutter", "Mobile", "Desktop"
            ].map((tech) => (
              <span key={tech} className="text-[11px] font-black tracking-[0.3em] uppercase text-slate-800">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}