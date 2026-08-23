import { readFile } from "node:fs/promises";

const homePage = new URL("./page_html/home.html", import.meta.url);

export function getHomePage() {
  return readFile(homePage, "utf8");
}
