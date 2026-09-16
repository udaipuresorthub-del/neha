"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="section legal-page-wrap flex-center-col" style={{ minHeight: "60vh", textAlign: "center" }}>
      <div className="shell flex-center-col gap-24">
        <div className="eyebrow" style={{ color: "#ff4d4d" }}>Error 500</div>
        <h1>Server Error Occurred</h1>
        <p className="lead" style={{ maxWidth: 500, margin: "0 auto" }}>
          We encountered an unexpected server-side issue. Please try refreshing or return to the main dashboard.
        </p>
        <div className="actions" style={{ justifyContent: "center", marginTop: 20 }}>
          <button className="button gold" onClick={() => reset()}>
            Try Again
          </button>
          <Link href="/" className="button">
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
