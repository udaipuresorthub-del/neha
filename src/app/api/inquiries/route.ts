import { NextResponse } from "next/server";
import { z } from "zod";
import { connectMongo } from "@/lib/mongodb";
import { Inquiry } from "@/lib/inquiry";

const inquirySchema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(7).max(20),
  area: z.string().min(2).max(120),
  timing: z.string().min(2).max(120),
  preference: z.string().min(2).max(120),
  message: z.string().max(700).optional().default(""),
  consent: z.literal(true)
});

export async function POST(request: Request) {
  try {
    const payload = inquirySchema.parse(await request.json());
    await connectMongo();
    const inquiry = await Inquiry.create(payload);

    return NextResponse.json({
      ok: true,
      id: inquiry._id.toString(),
      message: "Inquiry received. Our team will respond discreetly."
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, message: "Please check the form details.", issues: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { ok: false, message: "Unable to submit inquiry right now." },
      { status: 500 }
    );
  }
}
