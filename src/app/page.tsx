import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CheckCircle2,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Heart,
  UserCheck,
  Star,
  Check,
  ChevronRight,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  Award,
  Crown,
  ShieldAlert,
  Camera
} from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import {
  profileImages,
  serviceAreas,
  siteConfig,
  overviewRows,
  seoContentHtml,
  faqs,
  companionTypes,
  pricingTiers,
  trustPoints
} from "@/lib/site";
import { blogPosts } from "@/lib/blogs";
import { GirlsCarousel } from "@/components/GirlsCarousel";
import { VerifiedPhotoGallery } from "@/components/VerifiedPhotoGallery";
import { verifiedCompanions } from "@/lib/profiles";

function getIndianDateString() {
  const utcDate = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffset);
  const yyyy = istDate.getUTCFullYear();
  const mm = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(istDate.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "#1 Udaipur Escort Service | Call Girls in Udaipur @ ₹3999 (COD) | Neha Mam",
  description:
    "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999 by Neha Mam. Elite Russian escorts, VIP models & independent companions with 100% Cash on Delivery. 24x7 private dispatch.",
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: "#1 Udaipur Escort Service | Call Girls in Udaipur @ ₹3999 (COD) | Neha Mam",
    description:
      "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999 by Neha Mam. Elite Russian escorts, VIP models & independent companions with 100% Cash on Delivery. 24x7 private dispatch.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        secureUrl: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Neha Mam - Udaipur Escort Service & Luxury Call Girls"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Udaipur Escort Service | Call Girls in Udaipur @ ₹3999 (COD) | Neha Mam",
    description:
      "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999 by Neha Mam. Elite Russian escorts, VIP models & independent companions with 100% Cash on Delivery.",
    images: [`${siteConfig.url}/images/udaipur-escort-service.jpg`]
  }
};

export default function Home() {
  const girlsCards = [
    {
      name: "Aisha Sharma",
      age: "22 Years",
      rating: "4.9",
      image: "/images/vip-escorts-udaipur-01.jpg",
      title: "VIP Escort Model",
      copy: "Aisha is a charming companion offering sophisticated conversation and gracious company for luxury palace dinners in Udaipur."
    },
    {
      name: "Priya Rajput",
      age: "24 Years",
      rating: "5.0",
      image: "/images/vip-escorts-udaipur-02.jpg",
      title: "Celebrity Model",
      copy: "Priya brings an elite, polished presence ideal for upscale corporate events, cocktail galas, and lakeside resort getaways."
    },
    {
      name: "Natasha Petrova",
      age: "23 Years",
      rating: "5.0",
      image: "/images/russian-call-girls-udaipur-01.jpg",
      title: "Russian Escort",
      copy: "Natasha radiates international glamour and poise, making her a favorite companion for destination weddings and luxury suite visits."
    },
    {
      name: "Ananya Sen",
      age: "23 Years",
      rating: "4.9",
      image: "/images/independent-call-girls-udaipur-01.jpg",
      title: "Independent Model",
      copy: "Ananya is an unhurried independent companion who loves romantic lakeside strolls along Lake Pichola and quiet dinner dates."
    },
    {
      name: "Elena Volkova",
      age: "24 Years",
      rating: "4.9",
      image: "/images/russian-call-girls-udaipur-02.jpg",
      title: "European Russian",
      copy: "Elena is a European model with statuesque elegance, bringing international flair to luxury suites and private evenings in Udaipur."
    },
    {
      name: "Riya Verma",
      age: "21 Years",
      rating: "4.8",
      image: "/images/college-call-girls-udaipur-01.jpg",
      title: "College Profile",
      copy: "Riya is playful, witty, and engaging, perfectly suited for young travelers seeking a knowledgeable local companion in Udaipur."
    },
    {
      name: "Simran Kaur",
      age: "25 Years",
      rating: "5.0",
      image: "/images/vip-escorts-udaipur-03.jpg",
      title: "High Profile VIP",
      copy: "Simran delivers effortless sophistication and flawless etiquette for exclusive business evenings and high-profile resort stays."
    },
    {
      name: "Kavya Patel",
      age: "22 Years",
      rating: "4.9",
      image: "/images/independent-call-girls-udaipur-02.jpg",
      title: "Independent Companion",
      copy: "Kavya is attentive and discreet, catering to gentlemen who value privacy, serene hotel companionship, and warm conversation."
    },
    {
      name: "Sofia Ivanova",
      age: "22 Years",
      rating: "5.0",
      image: "/images/russian-call-girls-udaipur-03.jpg",
      title: "Russian VIP Model",
      copy: "Sofia blends high fashion glamour with tender company, ideal for five-star resort retreats along Lake Pichola."
    },
    {
      name: "Pooja Singhania",
      age: "24 Years",
      rating: "4.8",
      image: "/images/luxury-resort-escorts-udaipur-01.jpg",
      title: "Resort VIP Escort",
      copy: "Pooja is renowned for her radiant smile, elegant demeanor, and relaxed conversational etiquette for private pool villa vacations."
    },
    {
      name: "Tanvi Deshmukh",
      age: "21 Years",
      rating: "4.8",
      image: "/images/college-call-girls-udaipur-02.jpg",
      title: "Modern College Girl",
      copy: "Tanvi offers cheerful, refreshing companionship, perfect for rooftop dining and relaxing city explorations."
    },
    {
      name: "Sana Mirza",
      age: "26 Years",
      rating: "4.9",
      image: "/images/vip-escorts-udaipur-04.jpg",
      title: "Elite Society Hostess",
      copy: "Sana provides graceful, top-tier company suited for heritage havelis, luxury business dates, and lakeside resort relaxation."
    },
    {
      name: "Daria Novikova",
      age: "23 Years",
      rating: "4.9",
      image: "/images/russian-call-girls-udaipur-04.jpg",
      title: "Foreign Model Escort",
      copy: "Daria radiates statuesque international poise, bringing unforgettable elegance to your private stay in Udaipur."
    },
    {
      name: "Aditi Sharma",
      age: "23 Years",
      rating: "4.9",
      image: "/images/independent-call-girls-udaipur-03.jpg",
      title: "Independent Call Girl",
      copy: "Aditi ensures genuine warmth, tender respect, and complete zero-rush hospitality for discerning gentlemen."
    },
    {
      name: "Krishna Rathore",
      age: "24 Years",
      rating: "5.0",
      image: "/images/luxury-resort-escorts-udaipur-02.jpg",
      title: "Resort Companion",
      copy: "Krishna brings classic Mewari grace and modern sophistication, perfect for serene lakeside evenings."
    },
    {
      name: "Meera Joshi",
      age: "22 Years",
      rating: "4.7",
      image: "/images/college-call-girls-udaipur-03.jpg",
      title: "Campus Model",
      copy: "Meera brings an energetic, joyful presence to brighten your holiday getaways across Udaipur."
    }
  ];

  const today = getIndianDateString();
  const featuredBlogs = blogPosts
    .filter((post) => post.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate))
    .slice(0, 3);

  // Advanced Technical JSON-LD Structured Data
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    "name": siteConfig.name,
    "alternateName": ["Neha Mam", "Neha Mam Escorts", "Udaipur Escort Service"],
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.png`,
    "image": `${siteConfig.url}/images/udaipur-escort-service.jpg`,
    "description": "Premier luxury adult companionship concierge service in Udaipur curated by Neha Mam with 100% Cash on Delivery.",
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "sameAs": [siteConfig.url]
  };

  const businessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    "name": siteConfig.name,
    "image": `${siteConfig.url}/images/udaipur-escort-service.jpg`,
    "url": siteConfig.url,
    "telephone": siteConfig.phone,
    "priceRange": "₹3999 - ₹19999",
    "paymentAccepted": "Cash on Delivery",
    "currenciesAccepted": "INR",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Udaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "313001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.5854,
      "longitude": 73.7125
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": serviceAreas.map((area) => ({
      "@type": "Place",
      "name": `${area}, Udaipur`
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "284",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    "url": siteConfig.url,
    "name": siteConfig.name,
    "description": "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999 by Neha Mam.",
    "publisher": {
      "@id": `${siteConfig.url}/#organization`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      }
    ]
  };

  const profileItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Verified Udaipur Companions by Neha Mam",
    "itemListElement": verifiedCompanions.slice(0, 12).map((girl, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${girl.name} - ${girl.categoryName} in ${girl.location}`,
      "image": `${siteConfig.url}${girl.image}`,
      "description": girl.bio
    }))
  };

  const imageGalleryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Verified Call Girls in Udaipur Photo Gallery - Neha Mam",
    "description": "Authentic verified photo directory of escort companions in Udaipur with 100% Cash on Delivery.",
    "url": siteConfig.url,
    "image": verifiedCompanions.slice(0, 16).map((c) => ({
      "@type": "ImageObject",
      "contentUrl": `${siteConfig.url}${c.image}`,
      "name": `${c.name} - ${c.categoryName} Udaipur`,
      "caption": c.alt
    }))
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileItemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow-container">
            <Crown size={15} className="icon-pulse" />
            <span className="eyebrow">The Royal Concierge of Udaipur • Curated by Neha Mam</span>
          </div>
          <h1>#1 Premium Udaipur Escort Service & Verified Call Girls in Udaipur</h1>
          <p className="hero-description">
            Welcome to <strong>Neha Mam Udaipur Escort Service</strong> on <strong>nehamam.com</strong>, the most trusted luxury companion concierge catering to gentlemen who value authenticity, elegance, and zero-risk reservations. If you are searching for genuine <strong>call girls in Udaipur</strong>, our exclusive portfolio brings together verified <strong>Udaipur escorts</strong>, prestigious <strong>VIP escort service Udaipur</strong> models, stunning <strong>Russian escorts in Udaipur</strong>, and warm <strong>independent call girls Udaipur</strong> starting at just <strong>₹3999</strong>. Enjoy express 30-minute room dispatch, 24x7 direct WhatsApp assistance, and genuine <strong>Cash on Delivery call girls</strong> with 100% privacy across Lake Pichola, Fateh Sagar, and luxury resort suites.
          </p>
          <div className="hero-actions">
            <Link className="button gold" href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20reserve%20a%20verified%20companion%20in%20Udaipur`}>
              <MessageCircle size={18} /> WhatsApp Neha Mam (COD)
            </Link>
            <Link className="button outline" href={`tel:${siteConfig.phone}`}>
              <Phone size={18} /> Direct Call: {siteConfig.phone}
            </Link>
            <Link className="button" href="#gallery">
              <Camera size={18} /> View Photo Gallery
            </Link>
          </div>
          <div className="hero-highlights">
            <span><CheckCircle2 size={15} /> 100% Cash on Delivery (COD)</span>
            <span><LockKeyhole size={15} /> Zero Advance Deposits</span>
            <span><Clock size={15} /> 30-Min Hotel Room Dispatch</span>
            <span><Sparkles size={15} /> Live WhatsApp Photo Check</span>
          </div>

          {/* Active Verified Companions Avatars Strip */}
          <div className="hero-companion-strip">
            <div className="hero-strip-label">
              <span className="hero-online-dot"></span>
              <span>Available in Udaipur (100% COD):</span>
            </div>
            <div className="hero-avatar-row">
              <Link href="#gallery" className="hero-avatar-pill" title="Aisha - VIP Escort Udaipur">
                <Image src="/images/vip-escorts-udaipur-01.jpg" alt="Aisha Sharma - VIP Escorts Udaipur" width={30} height={30} className="hero-avatar-img" />
                <span className="hero-avatar-name">Aisha</span>
              </Link>
              <Link href="#gallery" className="hero-avatar-pill" title="Natasha - Russian Escort Udaipur">
                <Image src="/images/russian-call-girls-udaipur-01.jpg" alt="Natasha Petrova - Russian Escorts Udaipur" width={30} height={30} className="hero-avatar-img" />
                <span className="hero-avatar-name">Natasha</span>
              </Link>
              <Link href="#gallery" className="hero-avatar-pill" title="Ananya - Independent Call Girl Udaipur">
                <Image src="/images/independent-call-girls-udaipur-01.jpg" alt="Ananya Sen - Independent Call Girls Udaipur" width={30} height={30} className="hero-avatar-img" />
                <span className="hero-avatar-name">Ananya</span>
              </Link>
              <Link href="#gallery" className="hero-avatar-pill" title="Priya - Celebrity Escort Udaipur">
                <Image src="/images/vip-escorts-udaipur-02.jpg" alt="Priya Rajput - Celebrity Escorts Udaipur" width={30} height={30} className="hero-avatar-img" />
                <span className="hero-avatar-name">Priya</span>
              </Link>
              <Link href="#gallery" className="hero-avatar-pill" title="Riya - College Girl Escort Udaipur">
                <Image src="/images/college-call-girls-udaipur-01.jpg" alt="Riya Verma - College Girls Udaipur" width={30} height={30} className="hero-avatar-img" />
                <span className="hero-avatar-name">Riya</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Ribbon */}
      <section className="ribbon-bar">
        <div className="shell ribbon-inner">
          <div className="ribbon-item">
            <Award className="ribbon-icon" size={24} />
            <div>
              <strong>Curated by Neha Mam</strong>
              <small>Handpicked & verified profiles</small>
            </div>
          </div>
          <div className="ribbon-item">
            <ShieldCheck className="ribbon-icon" size={24} />
            <div>
              <strong>100% COD Guaranteed</strong>
              <small>Zero advance money ever</small>
            </div>
          </div>
          <div className="ribbon-item">
            <Clock className="ribbon-icon" size={24} />
            <div>
              <strong>Express 30-Min Arrival</strong>
              <small>Lakeside hotels & resorts</small>
            </div>
          </div>
          <div className="ribbon-item">
            <Heart className="ribbon-icon" size={24} />
            <div>
              <strong>Complete Discretion</strong>
              <small>Chats purged after date</small>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Verified Companions Carousel */}
      <section className="section" id="profiles">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Verified Photo Showcase</span>
            <h2>Top Rated Call Girls in Udaipur Curated by Neha Mam</h2>
            <p className="subtitle">
              Every companion in our roster is physically verified with unfiltered recent photos. Settle payment directly in person with 100% Cash on Delivery upon companion arrival.
            </p>
          </div>
          <GirlsCarousel cards={girlsCards} />
          <div className="center-btn-wrap" style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 14 }}>
            <Link href="#gallery" className="button gold">
              <Camera size={16} /> Explore All 24+ Verified Photos Below
            </Link>
            <Link href="/profiles" className="button outline">
              <Sparkles size={16} /> Full Profiles Directory
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Verified Photo Gallery Showcase (NEW FEATURED RICH IMAGE SECTION) */}
      <section className="section alt" id="gallery">
        <div className="shell">
          <div className="center-header">
            <div className="eyebrow-container" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <Crown size={15} className="gold-text" />
              <span className="eyebrow" style={{ margin: 0 }}>Live Photo Directory</span>
            </div>
            <h2>Verified Call Girls in Udaipur – High Definition Photo Gallery</h2>
            <p className="subtitle">
              Browse unfiltered, high-resolution photographs of our verified companions in Udaipur. Filter by category, review hotel room dispatch locations, and request live WhatsApp selfie checks before booking. 100% Cash on Delivery guarantee with zero advance deposit.
            </p>
          </div>
          
          {/* Interactive Filtering Photo Gallery Component */}
          <VerifiedPhotoGallery />
        </div>
      </section>

      {/* Why Neha Mam - E-E-A-T Concierge Story */}
      <section className="section">
        <div className="shell">
          <div className="about-grid">
            <div className="about-text">
              <span className="eyebrow">The Neha Mam Difference</span>
              <h2>Why Discerning Gentlemen Choose Neha Mam in Udaipur</h2>
              <p>
                In an industry clouded by anonymous brokers and advance fee scams, <strong>Neha Mam</strong> established this platform to provide a dependable, royal standard of hospitality. When you plan a trip to Rajasthan, your focus should be on enjoying Udaipur&apos;s breathtaking palaces, luxury havelis, and sunset lake views—not worrying about fake profiles or unkept promises.
              </p>
              <p>
                As founder and concierge director, Neha Mam personally oversees companion verification and client coordination. We never ask for Google Pay, PhonePe, or registration deposits prior to your meeting. You review unfiltered photos on WhatsApp, confirm your companion, and settle the tariff only when she steps into your hotel room.
              </p>
              <div className="trust-points-grid" style={{ marginTop: 20 }}>
                {trustPoints.slice(0, 6).map((point, index) => (
                  <div key={index} className="trust-point-item flex-center-gap">
                    <CheckCircle2 size={16} className="gold-text" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: 14 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-card-banner">
              <div className="concierge-highlight-card">
                <Crown size={32} className="gold-text" />
                <h3>Official Neha Mam Concierge Desk</h3>
                <p>Direct personal booking coordination via WhatsApp and call. Confidentiality guaranteed.</p>
                <div className="concierge-phone-box">
                  <Phone size={18} />
                  <a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>
                </div>
                <div className="concierge-wa-box" style={{ marginTop: 10 }}>
                  <MessageCircle size={18} />
                  <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam`}>Chat on WhatsApp</a>
                </div>
                <small style={{ display: "block", marginTop: 12, color: "var(--muted)", fontSize: 12 }}>
                  Available 24 Hours • Lake Pichola • Fateh Sagar • All Resorts
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion Categories Showcase */}
      <section className="section alt" id="services">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Exclusive Categories</span>
            <h2>Tailored Companionship for Every Occasion</h2>
            <p className="subtitle">
              From elite corporate dinner dates to romantic lakeside evenings, discover our curated tiers of verified Udaipur escorts.
            </p>
          </div>
          <div className="categories-grid">
            {companionTypes.map((cat) => (
              <div key={cat.title} className="category-card">
                <div className="cat-img-wrap">
                  <Image
                    src={cat.image}
                    alt={`${cat.title} - Neha Mam Udaipur Escort Service`}
                    width={400}
                    height={300}
                    className="cat-photo"
                  />
                  <div className="cat-badge">{cat.title}</div>
                </div>
                <div className="cat-body">
                  <h3>{cat.title}</h3>
                  <p>{cat.copy}</p>
                  <div className="cat-tags" style={{ display: "flex", gap: 6, flexWrap: "wrap", margin: "14px 0" }}>
                    {cat.tags?.map((t) => (
                      <span key={t} style={{ fontSize: 11, background: "rgba(212, 175, 55, 0.12)", padding: "2px 8px", borderRadius: 4, color: "var(--gold-light)", fontWeight: 600 }}>
                        #{t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20am%20interested%20in%20booking%20${encodeURIComponent(cat.title)}`}
                    className="button outline"
                    style={{ width: "100%", textAlign: "center" }}
                  >
                    Inquire Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Tariff Matrix */}
      <section className="section" id="pricing">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Transparent Tariffs</span>
            <h2>Fair & Pocket-Friendly Packages Starting at ₹3999</h2>
            <p className="subtitle">
              Zero registration fees, zero advance deposits. Settle your package directly via 100% Cash on Delivery (COD) on companion arrival.
            </p>
          </div>
          <div className="pricing-matrix-grid">
            {pricingTiers.map((tier, idx) => (
              <div key={tier.category} className={`pricing-plan-card ${idx === 1 ? "featured" : ""}`}>
                {idx === 1 && <span className="pricing-badge-popular">Most Popular</span>}
                <div className="pricing-title">{tier.category}</div>
                <div className="pricing-duration">{tier.duration}</div>
                <div className="pricing-rate-wrap">
                  <span className="pricing-rate">{tier.rate}</span>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>/ date</span>
                </div>
                <span className="pricing-cod-tag">{tier.cod}</span>
                <ul className="pricing-features-list">
                  {tier.features.map((feat) => (
                    <li key={feat}>
                      <Check size={16} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20book%20the%20${encodeURIComponent(tier.category)}%20package`}
                  className={`button ${idx === 1 ? "gold" : "outline"}`}
                  style={{ width: "100%", textAlign: "center" }}
                >
                  Book Package (COD)
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Overview Table */}
      <section className="section alt">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Concierge Specifications</span>
            <h2>Key Service Highlights at a Glance</h2>
            <p className="subtitle">
              Authentic credentials, flexible hours, and rapid coverage engineered for elite guests.
            </p>
          </div>
          <div className="overview-table-wrap" style={{ maxWidth: 840, margin: "0 auto" }}>
            <table className="seo-table">
              <tbody>
                {overviewRows.map(([label, val]) => (
                  <tr key={label}>
                    <td style={{ fontWeight: 600, width: "35%", color: "#ffffff" }}>{label}</td>
                    <td style={{ color: "var(--ink-soft)" }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lakeside & Resort Locations with Visual Image Banners */}
      <section className="section" id="areas">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Rapid Citywide Dispatch</span>
            <h2>Companion Coverage Across Prime Udaipur Destinations</h2>
            <p className="subtitle">
              Our companions are stationed across all key hotel corridors to ensure express 30 to 45-minute room arrival.
            </p>
          </div>
          <div className="locations-grid-cards">
            {/* Card 1: Lake Pichola */}
            <div className="location-card">
              <div className="location-img-wrap">
                <Image
                  src="/images/lake-pichola-escorts-udaipur.jpg"
                  alt="Lake Pichola Escort Service Udaipur Hotels and Ghats"
                  width={400}
                  height={200}
                  className="location-img"
                />
                <div className="location-img-overlay"></div>
                <div className="location-icon-badge">
                  <MapPin size={13} className="gold-text" /> Lake Pichola
                </div>
              </div>
              <h3>Lake Pichola & Heritage Ghats</h3>
              <p>Taj Lake Palace, The Leela Palace, Shiv Niwas Palace, and luxury heritage havelis along Lal Ghat and Chandpole.</p>
              <span className="dispatch-time">30-Min Dispatch</span>
            </div>

            {/* Card 2: Fateh Sagar */}
            <div className="location-card">
              <div className="location-img-wrap">
                <Image
                  src="/images/fateh-sagar-call-girls-udaipur.jpg"
                  alt="Fateh Sagar Lake Call Girls in Udaipur Rani Road Resorts"
                  width={400}
                  height={200}
                  className="location-img"
                />
                <div className="location-img-overlay"></div>
                <div className="location-icon-badge">
                  <MapPin size={13} className="gold-text" /> Fateh Sagar
                </div>
              </div>
              <h3>Fateh Sagar & Rani Road</h3>
              <p>Radisson Blu, The Lalit Laxmi Vilas, and picturesque sunset promenade resorts along romantic Rani Road.</p>
              <span className="dispatch-time">30-Min Dispatch</span>
            </div>

            {/* Card 3: City Palace */}
            <div className="location-card">
              <div className="location-img-wrap">
                <Image
                  src="/images/city-palace-escorts-udaipur.jpg"
                  alt="City Palace Escort Service Udaipur Old Town Stays"
                  width={400}
                  height={200}
                  className="location-img"
                />
                <div className="location-img-overlay"></div>
                <div className="location-icon-badge">
                  <MapPin size={13} className="gold-text" /> City Palace
                </div>
              </div>
              <h3>City Palace & Old Town</h3>
              <p>Discreet companion dispatch to boutique heritage stays, havelis, and luxury rooftop dinner venues in the old city.</p>
              <span className="dispatch-time">35-Min Dispatch</span>
            </div>

            {/* Card 4: Oberoi Udaivilas */}
            <div className="location-card">
              <div className="location-img-wrap">
                <Image
                  src="/images/oberoi-udaivilas-escorts.jpg"
                  alt="The Oberoi Udaivilas Luxury Escorts Udaipur Haridas Ji Ki Magri"
                  width={400}
                  height={200}
                  className="location-img"
                />
                <div className="location-img-overlay"></div>
                <div className="location-icon-badge">
                  <MapPin size={13} className="gold-text" /> Oberoi Udaivilas
                </div>
              </div>
              <h3>Oberoi Udaivilas & Haridas Magri</h3>
              <p>The Oberoi Udaivilas, Trident, and secluded luxury pool villas overlooking illuminated palace waters.</p>
              <span className="dispatch-time">30-Min Dispatch</span>
            </div>

            {/* Card 5: The Leela Palace & Ambavgarh */}
            <div className="location-card">
              <div className="location-img-wrap">
                <Image
                  src="/images/leela-palace-escorts-udaipur.jpg"
                  alt="The Leela Palace Escorts in Udaipur Ambavgarh Luxury Suites"
                  width={400}
                  height={200}
                  className="location-img"
                />
                <div className="location-img-overlay"></div>
                <div className="location-icon-badge">
                  <MapPin size={13} className="gold-text" /> The Leela Palace
                </div>
              </div>
              <h3>The Leela Palace & Ambavgarh</h3>
              <p>Ultra-exclusive palace suites, luxury dining pavilions, and private havelis in Ambavgarh and surrounding lakeside.</p>
              <span className="dispatch-time">30-Min Dispatch</span>
            </div>

            {/* Card 6: Airport Road & Raffles */}
            <div className="location-card">
              <div className="location-img-wrap">
                <Image
                  src="/images/raffles-udaipur-escorts.jpg"
                  alt="Raffles Udaipur Escort Service and Airport Road Resorts"
                  width={400}
                  height={200}
                  className="location-img"
                />
                <div className="location-img-overlay"></div>
                <div className="location-icon-badge">
                  <MapPin size={13} className="gold-text" /> Raffles Corridor
                </div>
              </div>
              <h3>Airport Road & Debari Resorts</h3>
              <p>Aurika, Raffles Udaipur private island retreat, and expansive wellness resort villas along the highway corridor.</p>
              <span className="dispatch-time">40-Min Dispatch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Master SEO Guide (GEO / AI Ranking) */}
      <section className="section alt">
        <div className="shell">
          <div dangerouslySetInnerHTML={{ __html: seoContentHtml }} />
        </div>
      </section>

      {/* Direct Booking CTA Panel */}
      <section className="section">
        <div className="shell booking-cta-panel">
          <div className="cta-left">
            <span className="eyebrow text-dark">Instant Dispatch</span>
            <h2 className="text-dark">Reserve Your Udaipur Companion with Neha Mam</h2>
            <p className="text-dark-muted">
              Ready to experience authentic Mewari royal hospitality? Connect with Neha Mam&apos;s confidential booking desk right now for live verified photo previews and prompt 30-minute room arrival.
            </p>
            <ul className="dark-bullet-list">
              <li><Check size={16} /> Starting packages from ₹3999</li>
              <li><Check size={16} /> 100% Cash on Delivery (COD) – Zero advance</li>
              <li><Check size={16} /> 24x7 Round-the-clock booking coordination</li>
              <li><Check size={16} /> Lake Pichola, Fateh Sagar & all resort coverage</li>
              <li><Check size={16} /> Verified VIP models, Russian escorts & college profiles</li>
              <li><Check size={16} /> 100% Confidential with instant chat clearing</li>
            </ul>
          </div>
          <div className="cta-right flex-center-col" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="cta-phone-card">
              <Phone size={24} className="gold-text" />
              <span>Direct Phone Call</span>
              <a href={`tel:${siteConfig.phone}`} className="phone-link">{siteConfig.phone}</a>
            </div>
            <div className="cta-wa-card">
              <MessageCircle size={24} className="green-text" />
              <span>WhatsApp Concierge</span>
              <a href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20book%20a%20verified%20companion`} className="wa-link">Chat with Neha Mam</a>
            </div>
          </div>
        </div>
      </section>

      {/* Confidential Reservation Form */}
      <section className="section alt" id="contact">
        <div className="shell form-wrap-v2">
          <div className="form-info-pane">
            <span className="eyebrow">Confidential Inquiries</span>
            <h2>Send Private Reservation Request</h2>
            <p>
              Submit your companion inquiry through our encrypted reservation desk. Neha Mam coordinates verified adult social companionship across luxury hotels, havelis, and private villas in Udaipur. Strict 18+ adult policies apply.
            </p>
            <div className="info-badge">
              <strong>Guaranteed Discretion:</strong> All communications, text messages, and booking details are purged periodically from our systems to ensure 100% client anonymity.
            </div>
          </div>
          <div className="form-container-pane">
            <InquiryForm />
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="section" id="faq">
        <div className="shell">
          <div className="center-header">
            <span className="eyebrow">Client Inquiries</span>
            <h2>Frequently Asked Questions</h2>
            <p className="subtitle">
              Authoritative answers from Neha Mam regarding companion verification, pricing tariffs, and hotel room delivery across Udaipur.
            </p>
          </div>
          <div className="faq-grid-v2">
            {faqs.map((faq, index) => (
              <details className="faq-details-v2" open={index === 0} key={faq.question}>
                <summary className="faq-summary-v2">{faq.question}</summary>
                <div className="faq-content-v2">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Insights & Guides Preview */}
      {featuredBlogs.length > 0 && (
        <section className="section alt">
          <div className="shell">
            <div className="center-header">
              <span className="eyebrow">Expert Guides</span>
              <h2>Latest Udaipur Companionship Insights by Neha Mam</h2>
              <p className="subtitle">
                Helpful advice on hotel guest guidelines, romantic lakeside dinner venues, and safe booking protocols in Udaipur.
              </p>
            </div>
            <div className="blog-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 30 }}>
              {featuredBlogs.map((post) => (
                <article key={post.slug} className="blog-card" style={{ background: "var(--bg-card)", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--card-shadow)" }}>
                  <div style={{ position: "relative", height: 180, width: "100%" }}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: 20 }}>
                    <span style={{ fontSize: 12, color: "var(--gold)", fontWeight: 600 }}>{post.publishDate}</span>
                    <h3 style={{ fontSize: 17, fontWeight: 700, margin: "8px 0 10px 0", color: "#ffffff", lineHeight: 1.4 }}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 14 }}>
                      {post.description}
                    </p>
                    <Link href={`/blog/${post.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, fontWeight: 600, color: "var(--gold-light)" }}>
                      Read Complete Guide <ChevronRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
