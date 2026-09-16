import mongoose, { Schema } from "mongoose";

const inquirySchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    area: { type: String, required: true, trim: true },
    timing: { type: String, required: true, trim: true },
    preference: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
    consent: { type: Boolean, required: true },
    source: { type: String, default: "website" }
  },
  { timestamps: true }
);

export const Inquiry =
  mongoose.models.Inquiry || mongoose.model("Inquiry", inquirySchema);
