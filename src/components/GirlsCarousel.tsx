"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, MessageCircle, Phone, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export type Girl = {
  name: string;
  age: string;
  rating: string;
  image: string;
  title: string;
  copy: string;
};

type CarouselProps = {
  girls?: Girl[];
  cards?: Girl[];
};

export function GirlsCarousel({ girls, cards }: CarouselProps) {
  const list = girls || cards || [];
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current || list.length === 0) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const cardWidth = containerRef.current.scrollWidth / list.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setActiveIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current || list.length === 0) return;
    const cardWidth = containerRef.current.scrollWidth / list.length;
    containerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const next = () => {
    const nextIdx = Math.min(activeIndex + 1, list.length - 1);
    scrollToIndex(nextIdx);
  };

  const prev = () => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToIndex(prevIdx);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [list.length]);

  return (
    <div className="carousel-wrapper">
      {/* Navigation Controls */}
      <button 
        className="carousel-arrow prev" 
        onClick={prev} 
        disabled={activeIndex === 0}
        aria-label="Previous slide"
      >
        <ChevronLeft size={22} />
      </button>

      <button 
        className="carousel-arrow next" 
        onClick={next} 
        disabled={activeIndex === list.length - 1}
        aria-label="Next slide"
      >
        <ChevronRight size={22} />
      </button>

      {/* Cards Scroll Track */}
      <div className="carousel-container" ref={containerRef}>
        {list.map((girl, idx) => (
          <article className="girl-card carousel-slide" key={girl.name + idx}>
            <div className="girl-image-wrap">
              <Image
                src={girl.image}
                alt={`${girl.name} - ${girl.title} Udaipur Escort Service by Neha Mam`}
                width={520}
                height={640}
                className="girl-card-image"
                priority={idx < 2}
              />
              
              {/* Floating Status & Rating Chips */}
              <div className="girl-top-chips">
                <span className="girl-rating">
                  <Star size={13} fill="#ffd700" color="#ffd700" /> {girl.rating}
                </span>
                <span className="girl-status-online">
                  <span className="pulse-dot"></span> Available
                </span>
              </div>
              
              <span className="girl-age-chip">{girl.age}</span>
            </div>

            <div className="girl-card-body">
              <div className="girl-card-header">
                <h3>{girl.name}</h3>
                <span className="girl-category-tag">{girl.title}</span>
              </div>

              <p>{girl.copy}</p>

              <div className="girl-card-meta">
                <span className="verified-badge">
                  <CheckCircle2 size={14} className="gold-text" /> Verified 18+
                </span>
                <span className="cod-badge">100% COD</span>
              </div>

              <div className="girl-card-actions">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20book%20${encodeURIComponent(girl.name)}%20(${encodeURIComponent(girl.title)})%20in%20Udaipur`}
                  className="button girl-whatsapp"
                >
                  <MessageCircle size={15} /> WhatsApp (Photos)
                </Link>
                <Link href={`tel:${siteConfig.phone}`} className="button girl-call">
                  <Phone size={15} /> Call Desk
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modern Progress Indicator */}
      <div className="carousel-dots">
        {list.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${activeIndex === index ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
