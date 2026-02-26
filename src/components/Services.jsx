import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";
import { services } from "./servicesData.jsx";

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20">
      <div className="relative">
        <SectionTitle
          kicker="Xizmatlar"
          title="Bizning xizmatlar"
          subtitle="Sizga kerak bo'lgan yechimni tez va sifatli yetkazamiz."
        />

        <div className="container-max mt-10">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.slug} delay={0.05 * i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-3xl bg-white border border-slate-200 shadow-softer p-6 h-full"
                  >
                    <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center">
                      <Icon className="text-sky-700" size={22} />
                    </div>

                    <h3 className="mt-4 font-extrabold text-[18px] text-slate-900">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-slate-600">{s.desc}</p>

                    <ul className="mt-4 space-y-2 text-[13px] text-slate-700">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex mt-5 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-4 py-2 text-[13px] font-semibold text-slate-700"
                    >
                      Batafsil
                    </Link>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}