export function startTopbar() {
  const element = document.createElement("div");
  element.className = "topbar";
  element.setAttribute("aria-hidden", "true");
  document.body.append(element);

  return {
    start() {
      element.dataset.active = "true";
    },
    complete() {
      element.dataset.active = "false";
    },
  };
}
