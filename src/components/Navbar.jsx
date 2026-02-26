import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Logo from "../../public/logo.png";

const links = [
  { id: "home", label: "Bosh sahifa" },
  { id: "services", label: "Xizmatlar" },
  { id: "projects", label: "Loyihalar" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerStyle = useMemo(() => {
    const active = isHome ? scrolled : true;

    return {
      background: active ? "rgba(11,18,32,0.92)" : "transparent",
      backdropFilter: active ? "blur(36px)" : "blur(0px)",
      WebkitBackdropFilter: active ? "blur(36px)" : "blur(0px)",
      borderBottom: active
        ? "1px solid rgba(148,163,184,0.20)"
        : "1px solid transparent",
      transition: "all 0.4s cubic-bezier(.4,0,.2,1)",
    };
  }, [isHome, scrolled]);

  const go = (id) => {
    setOpen(false);
    
    // Agar foydalanuvchi boshqa sahifada bo'lsa, avval bosh sahifaga o'tkazish
    if (!isHome) {
      navigate("/");
      // Sahifa yuklangandan keyin skroll qilish uchun biroz kutish
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={headerStyle}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container-max h-20 flex items-center justify-between gap-4">
        <Link to="/" onClick={() => isHome ? go("home") : null} className="flex items-center gap-2">
          <img src={Logo} alt="INFINITE" className="h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-white">
          {links.map((l) => (
            <button
              key={l.id} // Key mana shu yerda bo'lishi shart
              onClick={() => go(l.id)}
              className="hover:text-sky-400 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <Link to='/about' className="hover:text-sky-400 transition-colors">Biz Haqimizda</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+998901234567"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white"
          >
            <PhoneCall size={16} /> +998 90 123 45 67
          </a>

          {/* <button
            onClick={() => go("pricing")}
            className="rounded-full bg-sky-600 hover:bg-sky-700 text-white text-[13px] font-semibold px-4 py-2 shadow-lg transition-all"
          >
            Buyurtma berish
          </button> */}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white backdrop-blur-lg border-b border-slate-200 overflow-hidden"
          >
            <div className="container-max py-6 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-left text-lg py-2 text-slate-900 font-bold border-b border-slate-100 active:text-sky-600"
                >
                  {l.label}
                </button>
              ))}
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="text-left text-lg py-2 text-slate-900 font-bold border-b border-slate-100"
              >
                Biz Haqimizda
              </Link>
              <a
                href="tel:+998901234567"
                className="flex items-center gap-2 pt-2 text-sky-600 font-bold text-lg"
              >
                <PhoneCall size={20} /> +998 90 123 45 67
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}