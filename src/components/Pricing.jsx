import React from "react";
import { Check } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const plans = [
  {
    name: "Start",
    price: "3 500 000 so'm",
    hint: "Kichik biznes uchun",
    features: ["1–3 sahifa", "Asosiy SEO", "Kontakt forma", "Admin panel (ixtiyoriy)"],
    popular: false
  },
  {
    name: "Pro",
    price: "6 500 000 so'm",
    hint: "O'sayotgan kompaniya",
    features: ["5–10 sahifa", "Blog/portfolio", "Integratsiya (Telegram)", "Tezlik optimizatsiya"],
    popular: true
  },
  {
    name: "Business",
    price: "9 500 000 so'm",
    hint: "Platforma/CRM",
    features: ["Rol va huquqlar", "Dashboard/Hisobot", "CI/CD, SSL", "3 oy support"],
    popular: false
  },
];

export default function Pricing(){
  return (
    <section id="pricing" className="py-14 md:py-20 bg-[linear-gradient(180deg,#eaf4ff,white)]">
      {/* <div className="relative">
        <div className="absolute inset-0 grid-dots -z-10" />
        <SectionTitle
          kicker="Narxlar"
          title="Hamyonbop paketlar"
          subtitle="Aniq narx va scope — brief va konsultatsiyadan keyin tasdiqlanadi."
        />

        <div className="container-max mt-10">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={0.05*i}>
                <div className={"rounded-3xl border shadow-soft p-6 bg-white relative " + (p.popular ? "border-sky-300" : "border-slate-200")}>
                  {p.popular && (
                    <div className="absolute -top-3 left-6 rounded-full bg-sky-600 text-white px-3 py-1 text-[12px] font-semibold shadow-softer">
                      Eng ko'p tanlanadi
                    </div>
                  )}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-extrabold text-ink text-[18px]">{p.name}</div>
                      <div className="text-[12px] text-slate-500 mt-1">{p.hint}</div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="text-3xl font-extrabold text-ink">{p.price}</div>
                    <div className="text-[12px] text-slate-500 mt-1">bir martalik</div>
                  </div>

                  <ul className="mt-5 space-y-2 text-[13px] text-slate-700">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-0.5 h-5 w-5 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center">
                          <Check size={14} className="text-sky-700"/>
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={"mt-6 w-full rounded-full px-4 py-3 text-[13px] font-semibold shadow-softer " + (p.popular ? "bg-sky-600 hover:bg-sky-700 text-white" : "bg-slate-900 hover:bg-ink text-white")}>
                    Tanlash
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* brands */}
          {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-slate-500">
            {["Fired", "CleanUp", "Tekbis", "Vital", "Refort", "Shells", "Piston"].map(b => (
              <div key={b} className="text-[13px] font-semibold">{b}</div>
            ))}
          </div>
        </div>
      </div>  */}
    </section>
  );
}
