"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, CheckCircle2, MessageCircle, Phone, MapPin, Sparkles, Filter } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { verifiedCompanions, CompanionProfile } from "@/lib/profiles";

type CategoryFilter = "all" | "vip" | "russian" | "independent" | "college" | "resort";

const filterTabs: { key: CategoryFilter; label: string; icon?: string }[] = [
  { key: "all", label: "All Verified Profiles" },
  { key: "vip", label: "VIP & Models" },
  { key: "russian", label: "Russian & Foreign" },
  { key: "independent", label: "Independent Girls" },
  { key: "college", label: "College Profiles" },
  { key: "resort", label: "Luxury Resort Escorts" }
];

export function VerifiedPhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredList = useMemo(() => {
    if (activeFilter === "all") return verifiedCompanions;
    return verifiedCompanions.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const displayedList = useMemo(() => {
    return filteredList.slice(0, visibleCount);
  }, [filteredList, visibleCount]);

  const handleFilterChange = (cat: CategoryFilter) => {
    setActiveFilter(cat);
    setVisibleCount(12);
  };

  return (
    <div className="verified-gallery-wrapper">
      {/* Category Tabs */}
      <div className="gallery-filter-bar" role="tablist" aria-label="Companion categories filter">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.key;
          const count = tab.key === "all" 
            ? verifiedCompanions.length 
            : verifiedCompanions.filter(c => c.category === tab.key).length;

          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              className={`gallery-filter-tab ${isActive ? "active" : ""}`}
              onClick={() => handleFilterChange(tab.key)}
            >
              <span>{tab.label}</span>
              <span className="tab-count-badge">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Gallery Cards Grid */}
      <div className="gallery-cards-grid">
        {displayedList.map((girl) => (
          <article 
            key={girl.id} 
            className="gallery-profile-card"
            itemScope 
            itemType="https://schema.org/Person"
          >
            <div className="gallery-card-img-wrap" itemScope itemType="https://schema.org/ImageObject">
              <Image
                src={girl.image}
                alt={girl.alt}
                width={480}
                height={620}
                className="gallery-card-photo"
                loading="lazy"
                itemProp="contentUrl"
              />
              <meta itemProp="caption" content={girl.alt} />
              
              {/* Status Chips */}
              <div className="gallery-chip-top-left">
                <span className="chip-verified">
                  <ShieldCheck size={13} /> 100% COD
                </span>
              </div>

              <div className="gallery-chip-top-right">
                <span className="chip-rating">
                  <Star size={12} fill="#d4af37" color="#d4af37" /> {girl.rating}
                </span>
              </div>

              {/* Location Tag */}
              <div className="gallery-chip-bottom-location">
                <MapPin size={12} className="gold-text" />
                <span>{girl.location}</span>
              </div>
            </div>

            {/* Body */}
            <div className="gallery-card-body">
              <div className="gallery-card-header">
                <div>
                  <h3 className="gallery-girl-name" itemProp="name">{girl.name}</h3>
                  <span className="gallery-girl-cat" itemProp="jobTitle">{girl.categoryName}</span>
                </div>
                <div className="gallery-girl-price">
                  <span className="price-label">Starts at</span>
                  <span className="price-val">{girl.price}</span>
                </div>
              </div>

              <p className="gallery-girl-bio" itemProp="description">{girl.bio}</p>

              {/* Feature Tags */}
              <div className="gallery-tag-row">
                <span className="tag-pill-age">Age: {girl.age}</span>
                {girl.tags.slice(0, 2).map((t) => (
                  <span key={t} className="tag-pill">#{t}</span>
                ))}
              </div>

              {/* WhatsApp & Call Action Buttons */}
              <div className="gallery-btn-row">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20verify%20and%20book%20${encodeURIComponent(girl.name)}%20(${encodeURIComponent(girl.categoryName)})%20in%20${encodeURIComponent(girl.location)}.%20Please%20send%20live%20unfiltered%20photos.`}
                  className="gallery-wa-btn"
                  aria-label={`WhatsApp Live Photo Check for ${girl.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={15} /> WhatsApp Photo Check
                </Link>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className="gallery-call-btn"
                  aria-label={`Direct Call for ${girl.name}`}
                >
                  <Phone size={14} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredList.length && (
        <div className="gallery-load-more-wrap">
          <button
            className="button outline"
            onClick={() => setVisibleCount((prev) => prev + 12)}
          >
            <Sparkles size={16} /> Load More Verified Companions ({filteredList.length - visibleCount} more)
          </button>
        </div>
      )}
    </div>
  );
}
