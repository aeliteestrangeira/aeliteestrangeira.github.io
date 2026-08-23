export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function link({ href, label }) {
  return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
}
