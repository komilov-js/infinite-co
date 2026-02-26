import React from "react";
import dots from "../assets/pattern-dots.svg";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { MessageSquare, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-sky-600 blur-[90px]" />
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-sky-400 blur-[90px]" />
      </div>

      <img src={dots} alt="" className="absolute right-10 top-10 w-72 opacity-20" />

      <div className="max-w-6xl mx-auto px-4 relative py-12">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Tekly" className="h-7 w-auto" />
            <p className="mt-4 text-[14px] text-white/75 max-w-[520px]">
              Tekly — veb, CRM, avtomatlashtirish va DevOps xizmatlari. Maqsad: sizning biznesingizni tezroq o&apos;stirish.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://t.me/komilov_js"
                target="_blank"
                rel="noopener noreferrer"
                className="
      group
      relative
      h-12 w-12
      flex items-center justify-center
      rounded-2xl
      bg-white/10
      backdrop-blur-md
      border border-white/20
      transition-all duration-300
      hover:bg-sky-500
    "
              >
                <FaTelegramPlane
                  size={20}
                  className="text-white group-hover:text-white transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          <div>
            <div className="font-extrabold">Bo&apos;limlar</div>
            <ul className="mt-4 space-y-2 text-[14px] text-white/75">
              <li><a className="hover:text-white" href="#services">Xizmatlar</a></li>
              <li><a className="hover:text-white" href="#projects">Loyihalar</a></li>
              <li><a className="hover:text-white" href="/about">Biz Haqimizda</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="p-5 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-lg font-bold">Loyihangiz bormi?</h4>
                <p className="text-[13px] text-white/60 mt-2">
                  G'oyangizni muhokama qilaylik va uni haqiqatga aylantiramiz.
                </p>
                <a
                  href="https://t.me/komilov_js"
                  className="mt-4 flex items-center justify-between bg-sky-600 hover:bg-sky-500 text-white px-4 py-3 rounded-xl transition-all font-semibold text-[14px]"
                >
                  Bepul maslahat olish
                  <ArrowUpRight size={18} />
                </a>
              </div>
              {/* Bezak uchun kichik nur */}
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-sky-500/20 blur-2xl group-hover:bg-sky-500/40 transition-all"></div>
            </div>

            {/* Kontaktlar */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-[13px] text-white/70">
                <MapPin size={16} className="text-sky-400" />
                <span>Andijon Viloyati, O'zbekiston</span>
              </div>
              <div className="flex items-center gap-3 text-[13px] text-white/70 hover:text-sky-400 transition-colors">
                <Phone size={16} className="text-sky-400" />
                <a href="tel:+998999065576">+998 99 906 55 76</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/60">
          <div>© {new Date().getFullYear()} Tekly. Barcha huquqlar himoyalangan.</div>
          <div className="flex gap-5"></div>
        </div>
      </div>
    </footer>
  );
}