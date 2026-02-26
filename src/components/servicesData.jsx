import {
  Boxes,
  LayoutDashboard,
  Shield,
  Bot,
  Smartphone,
  ShieldAlert,
} from "lucide-react";

export const services = [
  {
    slug: "web-development",
    icon: LayoutDashboard,
    title: "Veb sayt & Landing",
    desc: "Brendga mos dizayn, SEO, tezlik va konversiya uchun optimallash.",
    bullets: ["Responsive dizayn", "SEO texnik sozlamalar", "Admin panel (ixtiyoriy)"],
  },
  {
    slug: "crm-automation",
    icon: Boxes,
    title: "CRM & Avtomatlashtirish",
    desc: "Buyurtmalar, mijozlar, ombor, to'lovlar — hammasi bir tizimda.",
    bullets: ["Rollar va huquqlar", "Integratsiyalar (Telegram/Email)", "Hisobotlar"],
  },
  {
    slug: "telegram-bot",
    icon: Bot,
    title: "Telegram Bot & Integratsiya",
    desc: "Buyurtma qabul qilish, support, notification va to'lov integratsiyalari.",
    bullets: ["Admin panel (ixtiyoriy)", "Webhook / API integratsiya", "To‘lov / CRM ulash"],
  },
  {
    slug: "mobile-apps",
    icon: Smartphone,
    title: "Mobile Apps (iOS/Android)",
    desc: "Biznesingiz uchun tezkor va qulay mobil ilovalar: UI/UX → backend → release.",
    bullets: ["UI/UX dizayn", "API bilan ulash", "Play Market / App Store tayyorlash"],
  },
  {
    slug: "cyber-audit",
    icon: ShieldAlert,
    title: "Kiberxavfsizlik (Audit)",
    desc: "Sayt/CRM/server xavfsizligini tekshirish, zaifliklarni topish va tavsiyalar.",
    bullets: ["Xavfsizlik auditi", "Konfiguratsiya & hardening", "Monitoring va log tavsiyalar"],
  },
  {
    slug: "devops-security",
    icon: Shield,
    title: "Xavfsizlik & DevOps",
    desc: "Server, monitoring, CI/CD, backup va xavfsiz konfiguratsiya.",
    bullets: ["Docker/PM2/Nginx", "SSL, WAF tavsiyalar", "Log va alertlar"],
  },
];