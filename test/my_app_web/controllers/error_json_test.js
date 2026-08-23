import assert from "node:assert/strict";
import test from "node:test";
import { renderErrorJson } from "../../../lib/my_app_web/controllers/error_json.js";

test("renderiza erro JSON estável", () => {
  assert.deepEqual(JSON.parse(renderErrorJson(404)), { error: "not_found" });
});
