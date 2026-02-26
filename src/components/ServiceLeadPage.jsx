import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { services } from "./servicesData";
import { Send, ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";

export default function ServiceLeadPage() {
  const { slug } = useParams();
  const service = useMemo(() => services.find((s) => s.slug === slug), [slug]);

  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState("");
  const [err, setErr] = useState("");

  const [form, setForm] = useState({
    company: "",
    name: "",
    phone: "+998",
    projectType: "",
    description: "",
  });

  useEffect(() => {
    if (service?.title) setForm((p) => ({ ...p, projectType: service.title }));
  }, [service?.title]);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-softer p-7 text-center">
          <p className="text-slate-700 font-semibold">Xizmat topilmadi</p>
          <Link className="inline-flex mt-3 text-sky-700 underline" to="/#services">
            Xizmatlar ro‘yxatiga qaytish
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setOk("");
    setLoading(true);

    try {
      const res = await fetch("/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: service.title,
          serviceSlug: service.slug,
          company: form.company,
          name: form.name,
          phone: form.phone,
          projectType: form.projectType,
          message: form.description,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const tgDesc = data?.tg?.description;
        throw new Error(tgDesc || data?.message || "Server xatolik");
      }

      setOk("Yuborildi! Tez orada aloqaga chiqamiz.");
      setForm((p) => ({ ...p, description: "" }));
    } catch (e2) {
      setErr(e2.message || "Yuborishda xatolik");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-14 md:py-20 bg-slate-50">
      <div className="container-max">
        {/* Back */}
        <div className="mb-6">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            Xizmatlar ro‘yxatiga qaytish
          </Link>
        </div>

        {/* Center card */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl bg-white border border-slate-200 shadow-softer p-7 md:p-9">
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0">
                <Icon className="text-sky-700" size={22} />
              </div>

              <div className="flex-1">
                <p className="text-[12px] font-semibold text-slate-500">
                  Ariza qoldirish
                </p>
                <h1 className="mt-1 text-2xl md:text-3xl font-extrabold text-slate-900">
                  {service.title}
                </h1>
                <p className="mt-2 text-[14px] text-slate-600">{service.desc}</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={submit} className="mt-7 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Company name">
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    placeholder="Enter your company"
                    className={inputCls}
                    autoComplete="organization"
                  />
                </Field>

                <Field label="Your name">
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    className={inputCls}
                    autoComplete="name"
                  />
                </Field>

                <Field label="Phone number">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+998 90 123 45 67"
                    className={inputCls}
                    autoComplete="tel"
                  />
                </Field>

                <Field label="Type of project">
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={onChange}
                    className={`${inputCls} cursor-pointer bg-white`}
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Project description">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={onChange}
                  placeholder="Qisqacha loyiha haqida yozing..."
                  rows={6}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              {/* alerts */}
              {err && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex gap-2">
                  <AlertTriangle size={18} className="mt-0.5" />
                  <div>
                    <div className="font-semibold">Xatolik</div>
                    <div className="text-red-700/90">{err}</div>
                  </div>
                </div>
              )}

              {ok && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 flex gap-2">
                  <CheckCircle2 size={18} className="mt-0.5" />
                  <div>
                    <div className="font-semibold">Yuborildi</div>
                    <div className="text-emerald-800/90">{ok}</div>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
                <p className="text-xs text-slate-500">
                  Yuborish orqali ma’lumotlar faqat aloqa uchun ishlatiladi.
                </p>

                <button
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full
                             bg-sky-600 hover:bg-sky-700 text-white
                             px-5 py-2.5 text-[13px] font-bold
                             disabled:opacity-60 disabled:hover:bg-sky-600 transition"
                >
                  {loading ? "Yuborilmoqda..." : "Submit"}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>

          <p className="mt-5 text-center text-[12px] text-slate-500">
            Infinite Co — tez va sifatli yechimlar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* UI helpers */
function Field({ label, children }) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

const inputCls =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 " +
  "placeholder:text-slate-400 outline-none transition " +
  "focus:border-sky-300 focus:ring-4 focus:ring-sky-100 hover:border-slate-300";