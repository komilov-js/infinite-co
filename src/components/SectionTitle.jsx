import React from "react";
import Reveal from "./Reveal.jsx";

export default function SectionTitle({ kicker, title, subtitle, center=true, id }){
  return (
    <div id={id} className="container-max">
      <Reveal>
        <div className={center ? "text-center" : ""}>
          {kicker && (
            <p className="text-[12px] tracking-[.22em] uppercase text-sky-700 font-semibold">
              {kicker}
            </p>
          )}
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-ink text-balance">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-[14px] text-slate-600 max-w-[720px] mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </Reveal>
    </div>
  );
}
