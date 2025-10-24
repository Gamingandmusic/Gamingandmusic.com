import type { AppLoadContext, EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import pkg from "react-dom/server";
const { renderToString } = pkg;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  const userAgent = request.headers.get("User-Agent");
  const isBot = userAgent && isbot(userAgent);

  const body = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  const headers = new Headers(responseHeaders);
  headers.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + body, {
    status: responseStatusCode,
    headers,
  });
}