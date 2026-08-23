import assert from "node:assert/strict";
import test from "node:test";
import { getHomePage } from "../../../lib/my_app_web/controllers/page_controller.js";

test("carrega a página inicial e seus ativos JavaScript", async () => {
  const html = await getHomePage();

  assert.match(html, /Kauã Silbershlach Parodes/);
  assert.match(html, /\.\/css\/app\.css/);
  assert.match(html, /\.\/js\/app\.js/);
});
