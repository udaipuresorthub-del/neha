import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBlogPost, blogPosts } from "@/lib/blogs";
import { siteConfig } from "@/lib/site";
import { Calendar, User, ArrowLeft, Heart } from "lucide-react";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
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

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) return {};

  const today = getIndianDateString();
  if (post.publishDate > today) return {};

  const imageUrl = `${siteConfig.url}${post.image || "/images/udaipur-escort-service.jpg"}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${post.title} | Udaipur Escort Service`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${siteConfig.url}/blog/${slug}`
    },
    openGraph: {
      title: `${post.title} | Udaipur Escort Service`,
      description: post.description,
      url: `${siteConfig.url}/blog/${slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          secureUrl: imageUrl,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: post.title
        }
      ],
      locale: "en_IN",
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Udaipur Escort Service`,
      description: post.description,
      images: [imageUrl]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const today = getIndianDateString();
  if (post.publishDate > today) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${slug}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`
    },
    "headline": post.title,
    "description": post.description,
    "image": [
      `${siteConfig.url}${post.image || "/images/udaipur-escort-service.jpg"}`
    ],
    "datePublished": post.publishDate,
    "dateModified": post.publishDate,
    "inLanguage": "en-IN",
    "author": {
      "@type": "Organization",
      "name": siteConfig.name,
      "url": siteConfig.url
    },
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${siteConfig.url}/blog/${slug}`
      }
    ]
  };

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <div className="shell" style={{ maxWidth: 800 }}>
        <div style={{ marginBottom: 30 }}>
          <Link href="/blog" className="back-to-blog" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 14,
            fontWeight: 400,
            color: "var(--gold-dark)"
          }}>
            <ArrowLeft size={16} /> Back to Blog list
          </Link>
        </div>

        <article className="blog-post-article">
          <div className="blog-post-header" style={{ marginBottom: 30 }}>
            <div className="blog-meta-row" style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              fontSize: 13,
              fontWeight: 400,
              color: "var(--muted)",
              marginBottom: 16
            }}>
              <span className="flex-center-gap"><Calendar size={14} className="gold-text" /> {post.publishDate}</span>
              <span className="flex-center-gap"><User size={14} className="gold-text" /> Verified Admin</span>
            </div>
            <h1 style={{
              fontSize: "clamp(26px, 4vw, 42px)",
              lineHeight: 1.2,
              marginBottom: 20,
              color: "var(--ink)",
              fontWeight: 400
            }}>{post.title}</h1>
            <p className="lead" style={{ fontSize: 16, lineHeight: 1.6, color: "var(--ink)", opacity: 0.9, fontWeight: 400 }}>
              {post.description}
            </p>
          </div>

          <div className="blog-post-hero-image" style={{
            position: "relative",
            aspectRatio: "16 / 9",
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid var(--line)",
            marginBottom: 40
          }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="blog-post-content" style={{
            color: "var(--ink)",
            fontSize: 16,
            lineHeight: 1.8
          }}>
            {post.sections.map((section, idx) => (
              <section key={idx} style={{ marginBottom: 34 }}>
                <h2 style={{
                  fontSize: 22,
                  color: "var(--ink)",
                  marginBottom: 14,
                  borderLeft: "3px solid var(--gold)",
                  paddingLeft: 12,
                  fontWeight: 400
                }}>{section.heading}</h2>
                <p style={{ marginBottom: 16, fontWeight: 400 }}>{section.body}</p>
              </section>
            ))}
          </div>

          <div className="blog-post-footer-cta" style={{
            marginTop: 50,
            padding: 36,
            background: "var(--gold-gradient-soft)",
            border: "1.5px solid var(--line-strong)",
            borderRadius: 20,
            textAlign: "center",
            boxShadow: "var(--card-shadow)"
          }}>
            <Heart size={30} className="icon-pulse gold-text" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ color: "var(--ink)", fontSize: 20, marginBottom: 10, fontWeight: 400 }}>Looking for Premium Companionship in Udaipur?</h3>
            <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 24, maxWidth: 500, marginInline: "auto" }}>
              Book high class call girls and premium VIP escorts in Udaipur starting from ₹3999. Enjoy complete privacy and cash on delivery.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 16 }}>
              <Link href="/#contact" className="button gold">Book Now</Link>
              <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="button outline">WhatsApp Inquiry</Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
