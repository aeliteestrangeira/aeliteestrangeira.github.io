export function renderErrorJson(status = 500, message) {
  const defaults = {
    404: "not_found",
    500: "internal_error",
  };

  return JSON.stringify({
    error: defaults[status] ?? defaults[500],
    ...(message ? { message } : {}),
  });
}
