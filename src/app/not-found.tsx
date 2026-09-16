import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Page Not Found - Udaipur Escort Service",
  description: "The page you are looking for does not exist. Return to Udaipur Escort Service homepage."
};

export default function NotFound() {
  return (
    <main className="section legal-page-wrap flex-center-col" style={{ minHeight: "60vh", textAlign: "center" }}>
      <div className="shell flex-center-col gap-24">
        <div className="eyebrow">Error 404</div>
        <h1>Page Not Found</h1>
        <p className="lead" style={{ maxWidth: 500, margin: "0 auto" }}>
          The requested page could not be located. It may have been moved, deleted, or the URL may contain a typo.
        </p>
        <div className="actions" style={{ justifyContent: "center", marginTop: 20 }}>
          <Link href="/" className="button gold">
            Return Home
          </Link>
          <Link href="/profiles" className="button">
            View Profiles
          </Link>
        </div>
      </div>
    </main>
  );
}
