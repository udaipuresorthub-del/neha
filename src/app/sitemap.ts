import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { blogPosts } from "@/lib/blogs";

export const revalidate = 3600;

function getIndianDateString() {
  const utcDate = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffset);
  const yyyy = istDate.getUTCFullYear();
  const mm = String(istDate.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(istDate.getUTCDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const today = getIndianDateString();
  const publishedBlogs = blogPosts.filter((post) => post.publishDate <= today);

  const routes = ["", "/profiles", "/blog", "/terms", "/privacy"];
  
  // Dynamic blog routes
  const blogRoutes = publishedBlogs.map((post) => `/blog/${post.slug}`);
  const allRoutes = [...routes, ...blogRoutes];
  
  return allRoutes.map((route) => {
    let priority = 0.8;
    let changeFrequency: "daily" | "weekly" | "monthly" = "weekly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (route === "/profiles") {
      priority = 0.9;
      changeFrequency = "daily";
    } else if (route.startsWith("/blog/")) {
      priority = 0.75;
      changeFrequency = "weekly";
    } else if (route === "/blog") {
      priority = 0.85;
      changeFrequency = "daily";
    } else {
      priority = 0.5;
      changeFrequency = "monthly";
    }

    return {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority
    };
  });
}
