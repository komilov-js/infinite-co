import React from "react";
import { motion } from "framer-motion";
import { FileSearch, PencilRuler, Code2, Rocket } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const steps = [
  { icon: FileSearch, title: "Tahlil", desc: "Talablar, maqsad va auditoriyani aniqlaymiz." },
  { icon: PencilRuler, title: "Dizayn", desc: "UI/UX prototip, brend va sahifalar dizayni." },
  { icon: Code2, title: "Ishlab chiqish", desc: "Backend, frontend, test va integratsiyalar." },
  { icon: Rocket, title: "Start", desc: "Serverga joylash, monitoring va qo'llab-quvvatlash." },
];

export default function HowWeWork(){
  return (
    <section className="py-14 md:py-20">
      <SectionTitle
        kicker="Jarayon"
        title="Qanday ishlaymiz"
        subtitle="Har bosqichda siz bilan aloqa: demo, hisobot va tezkor feedback."
        id="how"
      />

      <div className="container-max mt-10">
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={0.05*i}>
                <motion.div whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white shadow-softer p-6 h-full">
                  <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                    <Icon className="text-sky-700" size={22} />
                  </div>
                  <div className="mt-4 font-extrabold text-ink">{s.title}</div>
                  <div className="mt-2 text-[13px] text-slate-600">{s.desc}</div>
                  <div className="mt-5 h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[55%] bg-sky-600 rounded-full" />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
