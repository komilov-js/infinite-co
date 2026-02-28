import React, { useEffect, useMemo } from "react";
import "./Hero.scss";
import Orqa_fon from "../components/imgs/orqa_fon.png";
import yerImg from "./imgs/yer.png";
import infinite from "../../public/logo.png";
import PromoVideo from "./PromoVideo.jsx";
import Services from "./Services.jsx";
import Analytics from "./Analytics.jsx";
import Projects from "./Projects.jsx";
import ExpertsAndFaq from "./ExpertsAndFaq.jsx";
import HowWeWork from "./HowWeWork.jsx";
// import Pricing from "./Pricing.jsx";
import Blog from "./Blog.jsx";
import Hamkor from "./hamkor/hamkor.jsx";


export default function Hero() {
  useEffect(() => {
    const el = document.getElementById("yer");
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY || 0;
      el.style.transform = `translate3d(0, ${y * 0.25}px, 0)`; // ✅ smoother
    };

    onScroll(); // ✅ birinchi renderdayoq ishlasin
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const gradient = useMemo(() => " ", []);

  return (
    <>

      <section id="home">
        <div className="container1">
          <div className="orqa_fon">
            <img id="for_img" src={Orqa_fon} alt="" />
            <img id="infinte" src={infinite} alt="" />
            <img id="yer" src={yerImg} alt="" />
          </div>
        </div>
      </section>
      <PromoVideo />
      <Services />
      <Analytics />
      <Projects />
      <ExpertsAndFaq />
      <HowWeWork />
      {/* <Pricing /> */}
      <Blog />
      <Hamkor />
    </>
  );
}