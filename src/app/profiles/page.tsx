import Image from "next/image";
import Link from "next/link";
import { profileImages, siteConfig } from "@/lib/site";
import { MessageCircle, Phone, Sparkles, ShieldCheck, CheckCircle2, Award, Clock } from "lucide-react";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Verified Companion Profiles | Call Girls in Udaipur @ ₹3999 | Neha Mam",
  description:
    "Browse authentic photos of verified call girls in Udaipur & VIP escorts by Neha Mam. Russian models, college girls & independent companions with 100% Cash on Delivery.",
  alternates: {
    canonical: `${siteConfig.url}/profiles`
  },
  openGraph: {
    title: "Verified Companion Profiles | Call Girls in Udaipur @ ₹3999 | Neha Mam",
    description:
      "Browse authentic photos of verified call girls in Udaipur & VIP escorts by Neha Mam. Russian models, college girls & independent companions with 100% Cash on Delivery.",
    url: `${siteConfig.url}/profiles`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        secureUrl: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Verified Companion Profiles - Neha Mam Udaipur Escort Service"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Verified Companion Profiles | Call Girls in Udaipur @ ₹3999 | Neha Mam",
    description:
      "Browse authentic photos of verified call girls in Udaipur & VIP escorts by Neha Mam. Russian models, college girls & independent companions with 100% Cash on Delivery.",
    images: [`${siteConfig.url}/images/udaipur-escort-service.jpg`]
  }
};

export default function ProfilesPage() {
  const profileDetails = [
    { image: profileImages[0], name: "Simran Sharma", category: "VIP Fashion Model", age: "23 Yrs", loc: "Lake Pichola" },
    { image: profileImages[1], name: "Priya Rajput", category: "Celebrity Escort", age: "24 Yrs", loc: "Fateh Sagar" },
    { image: profileImages[2], name: "Natasha Petrova", category: "Russian Model", age: "22 Yrs", loc: "Luxury Resorts" },
    { image: profileImages[3], name: "Ananya Sen", category: "Independent Companion", age: "23 Yrs", loc: "City Palace" },
    { image: profileImages[4], name: "Riya Verma", category: "College Profile", age: "21 Yrs", loc: "Hiran Magri" },
    { image: profileImages[5], name: "Kavya Singhania", category: "High Profile Escort", age: "25 Yrs", loc: "Sukher / Bhuwana" },
    { image: profileImages[6], name: "Sana Khan", category: "Romantic Escort", age: "24 Yrs", loc: "Airport Road" },
    { image: profileImages[7], name: "Elena Romanova", category: "International Russian", age: "23 Yrs", loc: "Oberoi Udaivilas" }
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Profiles",
        "item": `${siteConfig.url}/profiles`
      }
    ]
  };

  const profileItemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Verified Companion Profiles by Neha Mam - Udaipur Escort Service",
    "itemListElement": profileDetails.map((profile, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${profile.name} - ${profile.category} in ${profile.loc}`,
      "url": `${siteConfig.url}/profiles`,
      "image": `${siteConfig.url}${profile.image}`,
      "description": `Verified adult companion profile verified by Neha Mam. Available for in-call & out-call bookings across Udaipur with 100% Cash on Delivery.`
    }))
  };

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Verified Companion Profiles | Neha Mam Udaipur Escort Service",
    "description": "Exclusive verified directory of VIP models, Russian call girls, and independent companions in Udaipur curated by Neha Mam.",
    "url": `${siteConfig.url}/profiles`,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": `${siteConfig.url}/logo.png`
    }
  };

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileItemListJsonLd) }}
      />

      <div className="shell">
        <div className="eyebrow">Verified Gallery Portfolio • Curated by Neha Mam</div>
        <h1>Exclusive Companion Profiles – Udaipur Escort Service</h1>
        
        <p className="lead" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 840, lineHeight: 1.8, marginBottom: 24 }}>
          Welcome to the verified companion directory on <strong>nehamam.com</strong>. Each profile featured below has been physically met and vetted by <strong>Neha Mam</strong> for genuine beauty, refined etiquette, and strict discretion. Packages start from just <strong>₹3999</strong> with <strong>100% Cash on Delivery (COD)</strong> paid only upon physical arrival at your hotel room. Zero advance deposits required.
        </p>

        {/* Verification Guarantee Banner */}
        <div style={{ background: "var(--bg-soft)", border: "1px solid var(--line)", borderRadius: 14, padding: "18px 24px", display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center", marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ShieldCheck size={20} className="gold-text" />
            <strong style={{ fontSize: 14, color: "var(--ink)" }}>100% Genuine Photos</strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <CheckCircle2 size={20} className="gold-text" />
            <strong style={{ fontSize: 14, color: "var(--ink)" }}>Live WhatsApp Video/Photo Preview</strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Clock size={20} className="gold-text" />
            <strong style={{ fontSize: 14, color: "var(--ink)" }}>30-Min Hotel Dispatch</strong>
          </div>
        </div>

        {/* Profile Grid */}
        <div className="profile-grid" style={{ marginTop: 20 }}>
          {profileDetails.map((profile, index) => (
            <div key={profile.image + index} className="profile-card-wrap">
              <div className="profile-img-container">
                <Image
                  src={profile.image}
                  alt={`${profile.name} - ${profile.category} Udaipur Escort Service`}
                  width={420}
                  height={540}
                  className="profile-photo"
                />
              </div>
              <div className="profile-card-badge">
                <span>Verified 18+</span>
              </div>
              <div style={{ padding: "14px 16px", background: "#ffffff", borderTop: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, margin: 0, color: "var(--ink)" }}>{profile.name}</h3>
                <div style={{ fontSize: 13, color: "var(--gold-dark)", fontWeight: 600, marginTop: 4 }}>{profile.category}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4, display: "flex", justifyContent: "space-between" }}>
                  <span>Age: {profile.age}</span>
                  <span>{profile.loc}</span>
                </div>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20check%20availability%20for%20${encodeURIComponent(profile.name)}%20(${encodeURIComponent(profile.category)})`}
                  className="button gold"
                  style={{ width: "100%", marginTop: 12, padding: "8px 12px", fontSize: 13, textAlign: "center" }}
                >
                  <MessageCircle size={14} /> WhatsApp for Live Photos
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Hub */}
        <div className="actions" style={{ marginTop: 48, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <Link
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20please%20send%20live%20unfiltered%20companion%20photos%20available%20now`}
            className="button gold"
          >
            <MessageCircle size={16} /> WhatsApp Neha Mam for Live Photos
          </Link>
          <Link href={`tel:${siteConfig.phone}`} className="button outline">
            <Phone size={16} /> Direct Desk Call: {siteConfig.phone}
          </Link>
          <Link href="/#pricing" className="button">
            <Sparkles size={16} /> View Transparent Pricing Matrix
          </Link>
        </div>
      </div>
    </main>
  );
}
