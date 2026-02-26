import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items }){
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const active = open === idx;
        return (
          <div key={it.q} className="rounded-2xl border border-slate-200 bg-white shadow-softer overflow-hidden">
            <button
              onClick={() => setOpen(active ? -1 : idx)}
              className="w-full px-5 py-4 flex items-center justify-between gap-3 text-left"
            >
              <span className="font-extrabold text-[14px] text-ink">{it.q}</span>
              <motion.span animate={{ rotate: active ? 180 : 0 }} className="text-slate-500">
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: .28 }}
                  className="px-5 pb-4"
                >
                  <p className="text-[13px] text-slate-600">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
