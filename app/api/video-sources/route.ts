import { NextResponse } from "next/server";

export async function GET() {
  const data = await process.env.VIDEO_KV?.get("video_sources");
  return NextResponse.json(JSON.parse(data || "[]"));
}

export async function POST(request: Request) {
  const body = await request.json();
  await process.env.VIDEO_KV?.put(
    "video_sources",
    JSON.stringify(body)
  );
  return NextResponse.json({ ok: true });
}
