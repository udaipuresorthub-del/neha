import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/faq",
        destination: "/#faq",
        permanent: true
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true
      },
      {
        source: "/udaipur-escort-services",
        destination: "/",
        permanent: true
      },
      {
        source: "/about-us",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
