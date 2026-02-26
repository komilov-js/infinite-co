import Qizlar from "../components/imgs/qizlar.png";
import Uzbwomen from "../components/imgs/uzbwomen.png";
import Zamin from "../components/imgs/zamin.png";
import Register from "../components/imgs/register.png";
import Edumark from "../components/imgs/edumark.png";
import Akfa from "../components/imgs/akfa.png";
import Qizlar2 from '../components/imgs/qizlar2.png'
import Akfa2 from '../components/imgs/akfa2.png'
import Akfa3 from '../components/imgs/akfa4.png'
import Akfa4 from '../components/imgs/akfa3.png'
import Uzbwomen1 from '../components/imgs/uzbwomen1.png'
import Uzbwomen2 from '../components/imgs/uzbwomen2.png'


export const projects = [
    {
        slug: "qizlar-raqamli-avlod",
        title: "Qizlar raqamli avlod",
        desc: `Raqamli Avlod Qizlari — qizlarning IT sohasidagi bilimlarini rivojlantirishga qaratilgan yirik ijtimoiy loyiha. Platforma orqali minglab qizlar zamonaviy kasblarni o'rganish imkoniyatiga ega bo'ldilar.`,
        img: Qizlar,
        tag: "Education",
        url: "https://qizlar.digitalgeneration.uz",
        client: "Raqamli Avlod / IT Park",
        year: "2024",
        duration: "3 hafta",
        role: "Full Stack Development",
        stack: ["React", "Tailwind", "Node.js", "PostgreSQL"],
        goal: "Ro‘yxatdan o‘tish va kurs boshqaruvini raqamlashtirish, admin ishini yengillashtirish.",
        results: [
            "100,000+ ishtirokchi qamrab olindi",
            "Ta'lim jarayoni 100% raqamlashtirildi",
            "Avtomatlashtirilgan sertifikatlash tizimi joriy etildi"
        ],
        features: ["Onlayn ro'yxatdan o'tish", "O'quv modullari", "Admin dashboard"],
        gallery: [Qizlar, Qizlar2]
    },
    {
        slug: "kasana",
        title: "Kasana ",
        desc: "Kasanachilik bilan shug'ullanuvchi tadbirkorlar va xodimlar o'rtasidagi munosabatlarni tartibga soluvchi, buyurtmalar oqimini nazorat qiluvchi ixtisoslashgan CRM tizimi.",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80",
        tag: "Business",
        url: "https://kasana.uz",
        client: "Yagona Aloqa Markazi",
        year: "2023",
        duration: "2 oy",
        role: "System Architecture + Backend",
        stack: ["Vue.js", "Python", "Django", "Redis"],
        goal: "Kasanachilar ishini nazorat qilish va mahsulot yetkazib berish zanjirini shaffoflashtirish.",
        results: [
            "Buyurtma berish vaqti 40% ga qisqardi",
            "Xomashyo hisob-kitobi avtomatlashdi",
            "Xodimlar samaradorligini o'lchash tizimi yaratildi"
        ],
        features: ["Ombor boshqaruvi", "Buyurtma tracking", "Moliya hisoboti"],
        gallery: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"]
    },
    {
        slug: "akfa-build",
        title: "Akfa Build ",
        desc: "Akfa Build korxonasi uchun ishlab chiqilgan, qurilish materiallari katalogi va yirik loyihalar uchun mo'ljallangan B2B buyurtma berish platformasi.",
        img: Akfa,
        tag: "Corporate",
        url: "https://akfabuild.com/",
        client: "AKFA Group",
        year: "2024",
        duration: "6 hafta",
        role: "Frontend + UI/UX Design",
        stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
        goal: "Katta hajmdagi qurilish mahsulotlarini oson topish va korporativ mijozlar uchun qulay buyurtma tizimini yaratish.",
        results: [
            "Mobil trafikdan kelgan buyurtmalar 2 barobar oshdi",
            "CRM bilan to'liq integratsiya qilindi",
            "Multi-language (ko'p tilli) tizim joriy etildi"
        ],
        features: ["Kengaytirilgan filtrlar", "Loyihaviy hisob-kitob", "B2B Shaxsiy kabinet"],
        gallery: [Akfa, Akfa2, Akfa3,Akfa4]
    },
    {
        slug: "uzb-women",
        title: "Uzb-women",
        desc: "O'zbekiston ayollari uchun yaratilgan ijtimoiy portal bo'lib, u yerda huquqiy yordam, hamjamiyat forumlari va biznes dasturlari jamlangan.",
        img: Uzbwomen,
        tag: "Community",
        url: "https://women.gov.uz",
        client: "Oila va xotin-qizlar qo'mitasi",
        year: "2023",
        duration: "4 hafta",
        role: "Full Stack Development",
        stack: ["React", "Express.js", "MongoDB", "Socket.io"],
        goal: "Ayollarga huquqiy va psixologik yordam olish uchun xavfsiz raqamli muhit yaratish.",
        results: [
            "Onlayn konsultatsiya tizimi yo'lga qo'yildi",
            "50,000+ faol foydalanuvchi bazasi shakllandi",
            "Xavfsizlik choralari (end-to-end encryption) kuchaytirildi"
        ],
        features: ["Forumlar", "Chat tizimi", "Ma'lumotlar kutubxonasi"],
        gallery: [Uzbwomen,Uzbwomen1,Uzbwomen2]
    },
    {
        slug: "zamin",
        title: "Zamin",
        desc: "Zamin xalqaro jamoat fondining loyihalarini boshqarish va xayriya dasturlariga arizalar qabul qilish uchun mo'ljallangan rasmiy platforma.",
        img: Zamin,
        tag: "Non-Profit",
        url: "https://zaminfoundation.ngo",
        client: "Zamin Foundation",
        year: "2022",
        duration: "5 hafta",
        role: "UI/UX + Frontend",
        stack: ["React", "Sass", "GSAP", "Strapi CMS"],
        goal: "Fondning ijtimoiy loyihalarini ommaga tanishtirish va arizalar qabul qilish jarayonini soddalashtirish.",
        results: [
            "Arizalar qabul qilish to'liq avtomatlashdi",
            "Inklyuziv dizayn (ko'zi ojizlar uchun maxsus rejim) qo'shildi",
            "Yillik hisobotlar interaktiv ko'rinishga keltirildi"
        ],
        features: ["Inklyuzivlik", "Ariza topshirish", "Loyihalar xaritasi"],
        gallery: [Zamin]
    },
    {
        slug: "edumark",
        title: "EduMark ",
        desc: "O'quv markazlari va maktablar uchun yaratilgan zamonaviy Learning Management System (LMS). Unda davomat, baholash va onlayn imtihon tizimi mavjud.",
        img: Edumark,
        tag: "LMS",
        url: "https://edumark.uz",
        client: "Private Education Sector",
        year: "2023",
        duration: "3 oy",
        role: "Lead Developer",
        stack: ["Angular", "NestJS", "MySQL", "Docker"],
        goal: "O'quv jarayonini qog'ozsiz boshqarish va ota-onalar uchun nazorat tizimini yaratish.",
        results: [
            "Davomatni tekshirish vaqti 90% ga kamaydi",
            "Sertifikatlarni avtomatik generatsiya qilish yo'lga qo'yildi",
            "Ota-onalar uchun mobil ilova bilan bog'landi"
        ],
        features: ["Elektron jurnal", "Test builder", "Moliya moduli"],
        gallery: [Edumark]
    },
    {
        slug: "online-raqamli-avlod",
        title: "Online Raqamli Avlod",
        desc: "IT va dizayn bo'yicha video darslar, interaktiv testlar va mentorlar bilan ishlash imkonini beruvchi masofaviy ta'lim platformasi.",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
        tag: "E-Learning",
        url: "https://online.digitalgeneration.uz",
        client: "Digital Generation NGO",
        year: "2024",
        duration: "2 oy",
        role: "Backend & Video Streaming Setup",
        stack: ["Next.js", "FastAPI", "AWS S3", "Mux Video"],
        goal: "Katta hajmdagi video darslarni uzilishlarsiz ko'rish va bilimlarni test orqali mustahkamlash.",
        results: [
            "Video yuklanish tezligi 30% ga oshirildi",
            "O'quvchilar reyting tizimi joriy etildi",
            "20 dan ortiq yo'nalishda kurslar yuklandi"
        ],
        features: ["Video Streaming", "Savol-javob forum", "Shaxsiy profil"],
        gallery: ["https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"]
    },
    {
        slug: "digital-register",
        title: "Digital Register",
        desc: "Davlat va xususiy tashkilotlar uchun mo'ljallangan, katta hajmdagi ma'lumotlarni tartibga soluvchi elektron reyestr tizimi.",
        img: Register,
        tag: "Data Science",
        url: "https://register.uz",
        client: "Government Entities",
        year: "2023",
        duration: "10 hafta",
        role: "Database Architect + Backend",
        stack: ["React", "Go", "ElasticSearch", "PostgreSQL"],
        goal: "Ma'lumotlarni qog'oz arxivdan raqamli va qidirish oson bo'lgan formatga o'tkazish.",
        results: [
            "Millionlab ma'lumotlar ichidan qidiruv 1 soniyadan kam vaqt oladi",
            "Ma'lumotlar xavfsizligi yuqori darajaga ko'tarildi",
            "Excel formatida eksport qilish funksiyasi qo'shildi"
        ],
        features: ["Smart Search", "Role Management", "Logs & Auditing"],
        gallery: [Register]
    },
];