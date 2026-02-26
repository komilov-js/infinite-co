import React from "react";
import Reveal from "../../Reveal";
import { CheckCircle2, ArrowUpRight, Award, Zap, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-max">
        <Reveal>
          {/* TOP HEADER SECTION */}
          <div className="max-w-4xl mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-sky-600" />
              <span className="text-sky-600 font-bold tracking-[0.2em] text-xs uppercase">
                Infinite Co / 2022-2026
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Kelajakni kod bilan <br /> 
              <span className="text-slate-400 italic">quramiz.</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* LEFT SIDE: STORY & STATS */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  “INFINITE CO” — biznesingizni raqamli transformatsiya qilishda 
                  sizning strategik hamkoringiz.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  2022-yilda asos solingan kompaniyamiz qisqa vaqt ichida IT Park rezidentiga aylandi. 
                  Biz shunchaki kod yozmaymiz, biz biznesingiz samaradorligini oshiradigan 
                  ekotizimlar yaratamiz.
                </p>
              </div>

              {/* Minimalist Stats */}
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                <div>
                  <div className="text-3xl font-bold text-slate-900">2022</div>
                  <div className="text-sm text-slate-500 mt-1 uppercase tracking-wider">Tashkil topgan</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sky-600 flex items-center">
                    IT Park <ArrowUpRight size={20} className="ml-1" />
                  </div>
                  <div className="text-sm text-slate-500 mt-1 uppercase tracking-wider">Rezidentlik</div>
                </div>
              </div>

              {/* Approach Tag */}
              <div className="bg-slate-50 p-8 rounded-2xl relative overflow-hidden group">
                <Zap className="absolute -right-4 -top-4 w-24 h-24 text-slate-100 group-hover:text-sky-100 transition-colors" />
                <h4 className="font-bold text-slate-900 mb-2 relative z-10">Bizning missiya</h4>
                <p className="text-sm text-slate-600 relative z-10">
                  Biz uchun har bir loyiha — bu mas'uliyat. Biz mijoz talabini chuqur tahlil qilib, 
                  optimal texnologiyalarni tanlaymiz va barqaror tizimlar yaratamiz.
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: IMAGE & FEATURES */}
            <div className="lg:col-span-7 relative">
              {/* Image with Floating Elements */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Creative Team"
                  className="w-full h-full object-cover shadow-inner"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white shadow-xl flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="bg-sky-600 p-3 rounded-xl text-white">
                        <Award size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Sifat Kafolati</div>
                        <div className="text-xs text-slate-500 uppercase">Xalqaro standartlar</div>
                      </div>
                   </div>
                   <div className="hidden sm:block text-right">
                      <div className="text-sm font-bold text-slate-900">Cheksiz Imkoniyatlar</div>
                      <div className="text-xs text-slate-400">Infinite Innovation</div>
                   </div>
                </div>
              </div>

              {/* Service Grid - Overlapping slightly */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {[
                  "Veb-platformalar",
                  "Mobil ilovalar",
                  "CRM / ERP tizimlar",
                  "API Integratsiyalar"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
                    <CheckCircle2 size={18} className="text-sky-600" />
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}