import { readFile } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { renderErrorHtml } from "./controllers/error_html.js";
import { renderErrorJson } from "./controllers/error_json.js";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

function send(response, status, body, contentType) {
  response.writeHead(status, {
    "Content-Type": contentType,
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "X-Content-Type-Options": "nosniff",
  });
  response.end(body);
}

export async function routeRequest(request, response, config) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    send(response, 405, renderErrorJson(500, "method_not_allowed"), contentTypes[".json"]);
    return;
  }

  const url = new URL(request.url, "http://localhost");

  if (url.pathname === "/health") {
    send(response, 200, JSON.stringify({ status: "ok" }), contentTypes[".json"]);
    return;
  }

  const outputDirectory = fileURLToPath(config.outputDirectory);
  const relativePath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = resolve(outputDirectory, `.${relativePath}`);
  const allowedRoot = `${resolve(outputDirectory)}${sep}`;

  if (!filePath.startsWith(allowedRoot)) {
    send(response, 404, renderErrorHtml(404), contentTypes[".html"]);
    return;
  }

  try {
    const body = await readFile(filePath);
    send(response, 200, request.method === "HEAD" ? "" : body, contentTypes[extname(filePath)] ?? "application/octet-stream");
  } catch {
    send(response, 404, renderErrorHtml(404), contentTypes[".html"]);
  }
}
