import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { verifiedCompanions } from "@/lib/profiles";
import { VerifiedPhotoGallery } from "@/components/VerifiedPhotoGallery";
import { MessageCircle, Phone, Sparkles, ShieldCheck, CheckCircle2, Clock, Crown } from "lucide-react";

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
    "itemListElement": verifiedCompanions.map((profile, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": `${profile.name} - ${profile.categoryName} in ${profile.location}`,
      "url": `${siteConfig.url}/profiles`,
      "image": `${siteConfig.url}${profile.image}`,
      "description": `${profile.bio} Verified adult companion by Neha Mam with 100% Cash on Delivery in Udaipur.`
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
        <div className="eyebrow-container" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
          <Crown size={15} className="gold-text" />
          <span className="eyebrow" style={{ margin: 0 }}>Verified Gallery Portfolio • Curated by Neha Mam</span>
        </div>
        
        <h1>Exclusive Companion Profiles – Udaipur Escort Service</h1>
        
        <p className="lead" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 840, lineHeight: 1.8, marginBottom: 28 }}>
          Welcome to the verified companion directory on <strong>nehamam.com</strong>. Each profile featured below has been physically met and vetted by <strong>Neha Mam</strong> for genuine beauty, refined etiquette, and strict discretion. Packages start from just <strong>₹3999</strong> with <strong>100% Cash on Delivery (COD)</strong> paid only upon physical arrival at your hotel room. Zero advance deposits required.
        </p>

        {/* Verification Guarantee Banner */}
        <div style={{ background: "rgba(18, 25, 42, 0.75)", border: "1px solid var(--line)", borderRadius: 16, padding: "18px 24px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", marginBottom: 36, boxShadow: "var(--card-shadow)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <ShieldCheck size={20} className="green-text" />
            <strong style={{ fontSize: 14, color: "#ffffff" }}>100% Genuine Photos</strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <CheckCircle2 size={20} className="gold-text" />
            <strong style={{ fontSize: 14, color: "#ffffff" }}>Live WhatsApp Video/Photo Preview</strong>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Clock size={20} className="gold-text" />
            <strong style={{ fontSize: 14, color: "#ffffff" }}>30-Min Express Room Dispatch</strong>
          </div>
        </div>

        {/* Interactive Verified Gallery with Filter Tabs */}
        <VerifiedPhotoGallery />

        {/* Direct Action Hub */}
        <div className="actions" style={{ marginTop: 52, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
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
