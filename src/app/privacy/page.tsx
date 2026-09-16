import { siteConfig } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Privacy Policy & Discretion Standards | Udaipur Escort Service",
  description:
    "Discreet and private data practices. Learn how Udaipur Escort Service protects user confidentiality, inquiry details, and respects client preferences.",
  alternates: {
    canonical: `${siteConfig.url}/privacy`
  },
  openGraph: {
    title: "Privacy Policy & Discretion Standards | Udaipur Escort Service",
    description:
      "Discreet and private data practices. Learn how Udaipur Escort Service protects user confidentiality, inquiry details, and respects client preferences.",
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        secureUrl: `${siteConfig.url}/images/udaipur-escort-service.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Privacy Policy - Udaipur Escort Service"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Discretion Standards | Udaipur Escort Service",
    description:
      "Discreet and private data practices. Learn how Udaipur Escort Service protects user confidentiality, inquiry details, and respects client preferences.",
    images: [`${siteConfig.url}/images/udaipur-escort-service.jpg`]
  }
};

export default function PrivacyPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/privacy#webpage`,
    "url": `${siteConfig.url}/privacy`,
    "name": "Privacy Policy & Discretion Standards",
    "description": "Discreet and private data practices. Learn how Udaipur Escort Service protects user confidentiality, inquiry details, and respects client preferences.",
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
        "name": "Privacy Policy",
        "item": `${siteConfig.url}/privacy`
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
        <div className="eyebrow">Client Privacy Safeguards</div>
        <h1>Privacy Policy & Confidentiality</h1>
        <p className="lead">
          We maintain absolute confidentiality for our Udaipur escort service bookings. Learn how your privacy is protected below.
        </p>

        <h2>Information Collection & Scope</h2>
        <p>
          Udaipur Escort Service operates as an adult-only companionship inquiry desk. We collect only the minimal parameters required to check companion availability, such as your preferred name, phone number or WhatsApp contact details, hotel or area name, timing window, and escort profile preferences.
        </p>

        <h2>How Information Is Handled</h2>
        <p>
          Your inquiry parameters are strictly utilized to coordinate available companion profiles, verify schedules, and confirm the details of your reservation. We never maintain permanent logs or databases of client personal data, nor do we disclose or sell any client information to third-party marketing networks.
        </p>

        <h2>Zero Trace Discretion Practices</h2>
        <p>
          All direct communications via call, SMS, or WhatsApp are treated with absolute discretion. We regularly purge reservation messages and call histories to safeguard your identity and personal preferences.
        </p>

        <h2>Strictly 18+ Access Only</h2>
        <p>
          Our site and companion services are strictly restricted to consenting adults aged 18 and older. By submitting an inquiry, you verify that you meet this legal requirement and agree to communicate politely and respectfully.
        </p>
      </div>
    </main>
  );
}
