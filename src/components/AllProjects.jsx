import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal.jsx"; // pathni sizning strukturaga moslang
import { projects } from "../components/context.jsx"; // pathni moslang

export default function AllProjects() {
  return (
    <section className="py-14 md:py-20 bg-ink text-white">
      <div className="container-max">
        <Reveal>
          <div className="text-center">
            <p className="text-[12px] tracking-[.22em] uppercase text-white/70 font-semibold">
              Portfolio
            </p>
            <h1 className="mt-3 text-2xl md:text-3xl font-extrabold">
              Barcha loyihalar
            </h1>
            <p className="mt-3 text-[14px] text-white/70 max-w-[720px] mx-auto">
              Bu sahifada barcha loyihalarimizni ko‘rishingiz mumkin.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={0.03 * i}>
              <Link to={`/projects/${p.slug}`} className="block h-full">
                <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 shadow-soft hover:border-white/20 transition h-full flex flex-col">
                  <div className="relative h-56 flex-shrink-0">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                    <div className="absolute left-4 top-4 text-[12px] font-semibold px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white">
                      {p.tag}
                    </div>

                    <div className="absolute right-4 top-4 h-11 w-11 rounded-2xl bg-white/15 border border-white/20 text-white flex items-center justify-center">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <div className="text-white font-extrabold truncate">
                      {p.title}
                    </div>

                    <div className="mt-2 text-[13px] text-white/70 line-clamp-2 min-h-[40px]">
                      {p.desc}
                    </div>

                    <div className="mt-auto pt-4">
                      <span className="rounded-xl bg-sky-600 text-white px-4 py-2 text-[13px] font-semibold inline-block">
                        Batafsil
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}