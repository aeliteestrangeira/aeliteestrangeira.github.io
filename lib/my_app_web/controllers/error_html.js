import { escapeHtml } from "../components/core_components.js";
import { documentLayout } from "../components/layouts.js";

const titles = {
  404: "Página não encontrada",
  500: "Erro interno",
};

export function renderErrorHtml(status = 500, message) {
  const title = titles[status] ?? titles[500];
  const detail = message ? `<p>${escapeHtml(message)}</p>` : "";

  return documentLayout({
    title,
    body: `<main><h1>${escapeHtml(title)}</h1>${detail}</main>`,
  });
}
