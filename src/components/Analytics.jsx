import React from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";

const points = [
  { title: "Real vaqt analitikasi", desc: "KPI, buyurtmalar, trafik, konversiya va daromadni bir joyda ko'ring." },
  { title: "Smart xabarnomalar", desc: "Telegram/Email orqali muhim holatlarda tez xabar oling." },
  { title: "Biznesga yo'naltirilgan yechim", desc: "Texnik emas, natijaga ishlaydigan funksiyalarni taklif qilamiz." },
];

export default function Analytics(){
  return (
    <section className="py-8 md:py-10">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <p className="text-[12px] tracking-[.22em] uppercase text-sky-700 font-semibold">
                Analitika
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-ink text-balance">
                Siz doim xohlagan Analytics Overview
              </h2>
              <p className="mt-3 text-[14px] text-slate-600">
                Biz sizning mahsulotingizga mos dashboard tayyorlaymiz: segmentlar, grafiklar, filtrlar va eksport.
              </p>

              <div className="mt-6 space-y-4">
                {points.map((p, i) => (
                  <Reveal key={p.title} delay={0.06*i}>
                    <div className="flex gap-3">
                      <CheckCircle2 className="text-sky-700 mt-0.5" size={20}/>
                      <div>
                        <div className="font-extrabold text-[14px] text-ink">{p.title}</div>
                        <div className="text-[13px] text-slate-600 mt-1">{p.desc}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-slate-200 shadow-soft overflow-hidden bg-white">
              <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="font-extrabold text-slate-800">Dashboard</div>
                <div className="text-[12px] text-slate-500">Oxirgi 24 soat</div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    ["Trafik", "124,9K"],
                    ["Konversiya", "4.8%"],
                    ["Daromad", "$18,420"],
                  ].map(([a,b]) => (
                    <div key={a} className="rounded-2xl border border-slate-200 p-4 bg-white">
                      <div className="text-[12px] text-slate-500">{a}</div>
                      <div className="mt-2 text-xl font-extrabold text-ink">{b}</div>
                      <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full w-[62%] bg-sky-600 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 p-4 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="font-extrabold text-[14px]">Haftalik o'sish</div>
                    <div className="text-[12px] text-slate-500">+12.4%</div>
                  </div>
                  <div className="mt-3 h-28 rounded-2xl bg-[linear-gradient(180deg,rgba(31,134,255,.18),transparent_70%)] border border-sky-100 relative overflow-hidden">
                    <svg viewBox="0 0 600 160" className="absolute inset-0 h-full w-full">
                      <path d="M0,120 C80,110 120,60 200,70 C280,80 330,20 410,30 C490,40 520,10 600,22"
                        fill="none" stroke="rgba(31,134,255,.9)" strokeWidth="3" />
                      <path d="M0,120 C80,110 120,60 200,70 C280,80 330,20 410,30 C490,40 520,10 600,22 L600,160 L0,160 Z"
                        fill="rgba(31,134,255,.12)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
