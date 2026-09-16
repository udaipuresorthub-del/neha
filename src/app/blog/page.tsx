import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";
import { Calendar, ChevronRight } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Udaipur Companion Guides & Escort Service Insights | Neha Mam",
  description:
    "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips by Neha Mam.",
  alternates: {
    canonical: `${siteConfig.url}/blog`
  },
  openGraph: {
    title: "Udaipur Companion Guides & Escort Service Insights | Neha Mam",
    description:
      "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips by Neha Mam.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        secureUrl: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Udaipur Companion Guides & Escort Service Insights - Neha Mam"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Udaipur Companion Guides & Escort Service Insights | Neha Mam",
    description:
      "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips by Neha Mam.",
    images: [`${siteConfig.url}/images/udaipur-escort-service.jpg`]
  }
};

function getIndianDateString() {
  const utcDate = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffset);
  const yyyy = istDate.getUTCFullYear();
  const mm = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(istDate.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default function BlogListingPage() {
  const today = getIndianDateString();
  const publishedPosts = blogPosts
    .filter((post) => post.publishDate <= today)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.url}/blog#blog`,
    "name": "Companionship Insights & Udaipur Escort Guides by Neha Mam",
    "description": "Read expert companion guides on booking call girls in Udaipur, luxury hotel etiquette, lakeside date ideas, and discreet companionship tips by Neha Mam.",
    "url": `${siteConfig.url}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logo.png`
      }
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": `${siteConfig.url}/blog`
      }
    ]
  };

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="shell">
        <div className="eyebrow">Editorial Guides & Insights • Curated by Neha Mam</div>
        <h1>Companionship Insights & Udaipur Escort Guides</h1>
        <p className="lead" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 840, lineHeight: 1.8, marginBottom: 30 }}>
          Explore expert insider articles by <strong>Neha Mam</strong> covering verified call girl bookings in Udaipur, luxury hotel etiquette, Lake Pichola candlelight dining venues, and scam-prevention with 100% Cash on Delivery.
        </p>

        {publishedPosts.length === 0 ? (
          <div className="no-posts-notice">
            <p>No blog posts are published yet. Please check back later.</p>
          </div>
        ) : (
          <div className="blog-grid" style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 30 }}>
            {publishedPosts.map((post) => (
              <article key={post.slug} className="blog-card" style={{ background: "#ffffff", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden", boxShadow: "var(--card-shadow)", display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", height: 210, width: "100%" }}>
                  <Image
                    src={post.image}
                    alt={`${post.title} - Neha Mam`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 24, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--gold-dark)", fontWeight: 600, marginBottom: 8 }}>
                    <Calendar size={13} />
                    <span>{post.publishDate}</span>
                  </div>
                  <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px 0", color: "var(--ink)", lineHeight: 1.4 }}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6, marginBottom: 18, flexGrow: 1 }}>
                    {post.description}
                  </p>
                  <Link href={`/blog/${post.slug}`} className="button outline" style={{ alignSelf: "flex-start", padding: "8px 16px", fontSize: 13 }}>
                    Read Complete Guide <ChevronRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
