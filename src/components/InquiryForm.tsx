"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Phone, Sparkles, ShieldCheck, CheckCircle } from "lucide-react";
import { serviceAreas, siteConfig } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      area: String(formData.get("area") || ""),
      timing: String(formData.get("timing") || ""),
      preference: String(formData.get("preference") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on"
    };

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(result.message || "Your inquiry has been received with strict discretion. Neha Mam's desk will reply promptly.");
        event.currentTarget.reset();
        return;
      }

      setStatus("error");
      setMessage(result.message || "Unable to submit inquiry. Please connect via WhatsApp.");
    } catch (error) {
      setStatus("error");
      setMessage("Connection error. Please WhatsApp or call Neha Mam directly.");
    }
  }

  return (
    <form className="booking-form-v2" onSubmit={onSubmit}>
      <div className="form-header-badge">
        <ShieldCheck size={16} className="gold-text" />
        <span>100% Encrypted & Confidential Booking</span>
      </div>

      <div className="input-group-row">
        <label>
          <span>Your Preferred Alias / Name</span>
          <input name="name" placeholder="E.g., Rohit or Guest" required minLength={2} />
        </label>
        
        <label>
          <span>WhatsApp / Phone Number</span>
          <input name="phone" type="tel" placeholder="+91 98..." required minLength={7} />
        </label>
      </div>

      <div className="input-group-row">
        <label>
          <span>Destination / Hotel in Udaipur</span>
          <select name="area" required defaultValue="">
            <option value="" disabled>Select hotel district</option>
            {serviceAreas.map((area) => (
              <option key={area} value={area}>{area}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Preferred Timing</span>
          <input name="timing" placeholder="E.g., Tonight 9 PM or 30-Min Instant" required />
        </label>
      </div>

      <label>
        <span>Desired Companion Category</span>
        <select name="preference" required defaultValue="">
          <option value="" disabled>Select companion style</option>
          <option value="Standard College Profile (₹3999)">College Profile / Charming Companion (from ₹3,999)</option>
          <option value="Independent Call Girl (₹6999)">Independent Call Girl (Dinner & Romance - ₹6,999)</option>
          <option value="VIP Fashion Model (₹11999)">VIP Celebrity & Fashion Model (Overnight - ₹11,999)</option>
          <option value="Russian International Escort (₹19999)">Russian & European Model (Elite Luxury - ₹19,999)</option>
        </select>
      </label>

      <label>
        <span>Special Requests / Hotel Suite Details</span>
        <textarea name="message" placeholder="E.g., Hotel name, room delivery preference, language preference (optional)" />
      </label>

      <label className="checkbox-label-v2">
        <input name="consent" type="checkbox" required />
        <span className="checkbox-text">
          I verify that I am 18+ years of age and agree to settlement via 100% Cash on Delivery.
        </span>
      </label>

      <button className="button gold full-width glow-btn" type="submit" disabled={status === "loading"}>
        {status === "loading" ? (
          "Submitting Secure Request..."
        ) : (
          <span className="flex-center-gap" style={{ justifyContent: "center" }}>
            <Sparkles size={16} /> Request Confidential Reservation (COD)
          </span>
        )}
      </button>

      {message && (
        <div className={`status-notice-v2 ${status}`}>
          <p>{message}</p>
        </div>
      )}

      <div className="quick-actions-form">
        <a className="button form-call-action" href={`tel:${siteConfig.phone}`}>
          <Phone size={15} /> Direct Call
        </a>
        <a className="button form-wa-action" href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20Neha%20Mam,%20I%20want%20to%20reserve%20a%20verified%20companion%20in%20Udaipur`}>
          <MessageCircle size={15} /> WhatsApp Desk
        </a>
      </div>
    </form>
  );
}
