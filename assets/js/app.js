import { startTopbar } from "../vendor/topbar.js";

const topbar = startTopbar();

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');

  if (link) {
    topbar.complete();
  }
});

window.addEventListener("beforeunload", () => topbar.start());
