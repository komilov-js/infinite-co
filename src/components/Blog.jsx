import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const posts = [
  {
    title: "CRM tanlashda 7 ta muhim mezon",
    desc: "Jamoa o'sganda boshqaruv tizimi qanday rol o'ynaydi? Qisqa checklist.",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Serverni xavfsiz sozlash: Nginx + SSL",
    desc: "Amaliy tavsiyalar: SSL, headers, rate limit va backup.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Blog(){
  return (
    <section id="blog" className="py-14 md:py-20">
      {/* <SectionTitle
        kicker="Yangiliklar"
        title="So'nggi blog postlar"
        subtitle="Tez o'qiladigan, amaliy maqolalar — biznes va texnikaga foydali."
      /> */}
      {/* <div className="container-max mt-10">
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={0.05*i}>
              <div className="rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden">
                <div className="h-48 md:h-56 relative">
                  <img src={p.img} alt={p.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="font-extrabold text-ink text-[18px]">{p.title}</div>
                  <div className="mt-2 text-[13px] text-slate-600">{p.desc}</div>
                  <button className="mt-5 rounded-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 text-[13px] font-semibold">
                    O'qish
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div> */}
    </section>
  );
}
