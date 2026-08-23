import { escapeHtml } from "./core_components.js";

export function documentLayout({ title, body, language = "pt-BR" }) {
  return `<!doctype html>
<html lang="${escapeHtml(language)}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)}</title>
  </head>
  <body>${body}</body>
</html>`;
}
