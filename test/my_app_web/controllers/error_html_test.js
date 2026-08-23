import assert from "node:assert/strict";
import test from "node:test";
import { renderErrorHtml } from "../../../lib/my_app_web/controllers/error_html.js";

test("renderiza erro HTML sem interpolação insegura", () => {
  const html = renderErrorHtml(404, "<script>alert(1)</script>");

  assert.match(html, /Página não encontrada/);
  assert.doesNotMatch(html, /<script>/);
  assert.match(html, /&lt;script&gt;/);
});
