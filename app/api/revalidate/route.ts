import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const secret = requestHeaders.get("x-vercel-reval-key");
  const body = await request.json();
  const tag = body.metadata.tags[0].sys.id;

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (!tag) {
    return NextResponse.json({ message: "No tag provided" }, { status: 400 });
  }
  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
