import { readFile } from "node:fs/promises";

export async function loadMessages(locale = "en") {
  const file = new URL(`../../priv/gettext/${locale}/LC_MESSAGES/errors.json`, import.meta.url);
  return JSON.parse(await readFile(file, "utf8"));
}
