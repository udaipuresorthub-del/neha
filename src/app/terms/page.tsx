import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Terms of Service & 18+ Adult Guidelines | Udaipur Escort Service",
  description:
    "Official terms of service, age criteria (18+), and respectful conduct policies for booking adult companions with Udaipur Escort Service.",
  alternates: {
    canonical: `${siteConfig.url}/terms`
  },
  openGraph: {
    title: "Terms of Service & 18+ Adult Guidelines | Udaipur Escort Service",
    description:
      "Official terms of service, age criteria (18+), and respectful conduct policies for booking adult companions with Udaipur Escort Service.",
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        secureUrl: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Terms of Service - Udaipur Escort Service"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & 18+ Adult Guidelines | Udaipur Escort Service",
    description:
      "Official terms of service, age criteria (18+), and respectful conduct policies for booking adult companions with Udaipur Escort Service.",
    images: [`${siteConfig.url}/images/udaipur-escort-service.jpg`]
  }
};

export default function TermsPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/terms#webpage`,
    "url": `${siteConfig.url}/terms`,
    "name": "Terms of Service & 18+ Adult Guidelines",
    "description": "Official terms of service, age criteria (18+), and respectful conduct policies for booking adult companions with Udaipur Escort Service.",
    "isPartOf": {
      "@type": "WebSite",
      "name": siteConfig.name,
      "url": siteConfig.url
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
        "name": "Terms",
        "item": `${siteConfig.url}/terms`
      }
    ]
  };

  return (
    <main className="section legal-page-wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="shell legal-content-box">
        <div className="eyebrow">Operating Rules & Criteria</div>
        <h1>Terms and Conditions of Use</h1>
        <p className="lead">
          Please review the terms of service carefully before making companion inquiries or using our platform in Udaipur.
        </p>

        <h2>Permitted & Authorized Use</h2>
        <p>
          This website serves exclusively as an information and coordination desk for private adult social companionship. You agree to use the site solely for making legitimate, lawful inquiries. Any form of exploitative, coercive, explicit, abusive, or unlawful requests is strictly prohibited.
        </p>

        <h2>Age Restrictions (Strictly 18+)</h2>
        <p>
          You must be at least 18 years of age to access this site and request companion profiles. By submitting any forms or contacting our operators, you represent and warrant that you are of legal age and possess the capacity to agree to these terms.
        </p>

        <h2>Booking Coordination & Availability</h2>
        <p>
          Submitting a booking inquiry form or messaging our dispatch team does not constitute a guaranteed reservation. Profile availability fluctuates according to client location, timing, requested companions, and matching criteria. We reserve the right to decline booking inquiries at our discretion.
        </p>

        <h2>Client Conduct Requirements</h2>
        <p>
          Clients are expected to act respectfully, communicate politely, and abide by all local regulations, hotel rules, and safety guidelines. Any behavior compromising the dignity or safety of companions will result in the immediate termination of the companionship arrangement.
        </p>
      </div>
    </main>
  );
}
