import { NextRequest } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const disable = searchParams.get("disable");

  if (!disable) {
    if (!secret || secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
      return new Response("Missing ot insvalid secret", { status: 401 });
    }
    draftMode().enable();
    redirect("/");
  }
};
