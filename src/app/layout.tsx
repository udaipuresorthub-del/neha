import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { MessageCircle, Phone, Mail, Clock, MapPin, Sparkles, Shield, Heart, ShieldCheck } from "lucide-react";
import "./globals.css";
import { serviceAreas, siteConfig } from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: "#1 Udaipur Escort Service | Call Girls in Udaipur @ ₹3999 (COD) | Neha Mam",
  description:
    "Book top-rated Udaipur Escort Service & verified call girls in Udaipur from ₹3999 by Neha Mam. Elite Russian escorts, VIP models & independent companions with 100% Cash on Delivery. 24x7 private dispatch.",
  keywords: [
    "Udaipur Escort Service",
    "call girls in Udaipur",
    "escort service in Udaipur",
    "Udaipur escorts",
    "Russian escorts in Udaipur",
    "VIP escort service Udaipur",
    "independent call girls Udaipur",
    "Cash on Delivery call girls",
    "Lake Pichola escorts",
    "Fateh Sagar escort service",
    "Neha Mam Udaipur escort service",
    "Neha Mam call girls",
    "nehamam.com",
    "escort service in Udaipur contact number",
    "independent escort service Udaipur"
  ],
  verification: {
    google: siteConfig.googleVerification
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#111827",
  colorScheme: "light"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${poppins.className} ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content={siteConfig.googleVerification} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.brandName} />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <header className="header">
          <div className="topbar">
            <div className="shell topbar-inner">
              <span className="flex-center-gap">
                <Clock size={12} /> 24x7 Direct Concierge by Neha Mam • Express 30-Min Hotel Dispatch
              </span>
              <span className="flex-center-gap">
                <ShieldCheck size={12} /> 100% Cash on Delivery (COD) • Zero Advance Fees
              </span>
            </div>
          </div>
          <nav className="shell nav" aria-label="Main navigation">
            <Link href="/" className="brand" aria-label="Neha Mam - Udaipur Escort Service home">
              <Image
                src="/logo.svg"
                alt="Neha Mam - Udaipur Escort Service Logo"
                width={280}
                height={60}
                style={{ height: "46px", width: "auto", objectFit: "contain" }}
                priority
              />
            </Link>

            {/* Accessible Mobile Hamburger Toggle */}
            <input type="checkbox" id="nav-toggle" className="nav-toggle-input" />
            <label htmlFor="nav-toggle" className="nav-toggle-label" aria-label="Toggle navigation menu">
              <span></span>
              <span></span>
              <span></span>
            </label>

            <div className="navlinks">
              <Link href="/#services">Services</Link>
              <Link href="/profiles">Profiles</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/blog">Guides & Blog</Link>
              <Link href="/#areas">Locations</Link>
              <Link href="/#faq">FAQ</Link>
              <Link className="nav-call" href={`tel:${siteConfig.phone}`}>
                <Phone size={14} /> Call Desk
              </Link>
              <Link className="button gold nav-cta" href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20would%20like%20to%20inquire%20about%20companion%20booking%20in%20Udaipur`}>
                <Sparkles size={14} /> WhatsApp Now
              </Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="footer">
          <div className="shell footer-grid">
            <div className="footer-brand">
              <Image
                src="/logo.svg"
                alt="Neha Mam - Udaipur Escort Service Footer Logo"
                width={280}
                height={60}
                style={{ height: "46px", width: "auto", objectFit: "contain", marginBottom: "16px" }}
              />
              <p>
                <strong>Neha Mam Udaipur Escort Service</strong> is the City of Lakes&apos; premier, high-reputation luxury adult companion concierge on <strong>nehamam.com</strong>. Founded with the mission to eliminate advance payment fraud, Neha Mam provides 100% verified VIP models, Russian call girls, college profiles, and independent escorts with genuine Cash on Delivery (COD) starting from ₹3999.
              </p>
              <div className="footer-actions">
                <Link className="button gold" href={`tel:${siteConfig.phone}`}>
                  <Phone size={16} /> Direct Desk: {siteConfig.phone}
                </Link>
                <Link className="button footer-whatsapp" href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20book%20a%20verified%20companion`}>
                  <MessageCircle size={16} /> WhatsApp Neha Mam
                </Link>
              </div>
            </div>
            <div className="footer-col">
              <h3>Companion Roster</h3>
              <Link href="/#services">VIP Escorts Udaipur</Link>
              <Link href="/profiles">Verified Call Girl Profiles</Link>
              <Link href="/#services">Russian Escorts in Udaipur</Link>
              <Link href="/#services">Independent Companions</Link>
              <Link href="/#pricing">Transparent Tariff Matrix</Link>
              <Link href="/#services">5-Star Resort & Palace Visits</Link>
            </div>
            <div className="footer-col">
              <h3>Lakeside Locations</h3>
              {serviceAreas.slice(0, 7).map((area) => (
                <span key={area} className="flex-center-gap">
                  <MapPin size={12} /> {area}
                </span>
              ))}
            </div>
            <div className="footer-col">
              <h3>Discretion & Legal</h3>
              <Link href="/blog">Neha Mam&apos;s Booking Guides</Link>
              <Link href="/privacy">Privacy & Zero-Retention Policy</Link>
              <Link href="/terms">Terms of Service (Strict 18+)</Link>
              <span className="flex-center-gap"><Mail size={12} /> {siteConfig.email}</span>
              <span className="flex-center-gap"><Shield size={12} /> 100% Cash on Delivery</span>
              <span className="flex-center-gap"><Heart size={12} /> Consensual Adult Ethics</span>
            </div>
          </div>
          <div className="shell footer-bottom">
            <span>&copy; {new Date().getFullYear()} Neha Mam ({siteConfig.url.replace("https://", "")}). All Rights Reserved.</span>
            <span>DISCLAIMER: 18+ adult social companionship concierge. Strictly consensual adult guidelines. 100% Cash on Delivery. Zero pre-booking fees.</span>
          </div>
        </footer>

        {/* Sticky Mobile Contact Actions */}
        <div className="mobile-sticky-actions" aria-label="Quick contact actions">
          <Link href={`tel:${siteConfig.phone}`} className="mobile-call-sticky">
            <Phone size={16} /> Call Neha Mam
          </Link>
          <Link href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20need%20a%20verified%20companion%20in%20Udaipur`} className="mobile-wa-sticky">
            <MessageCircle size={16} /> WhatsApp (COD)
          </Link>
        </div>
      </body>
    </html>
  );
}
