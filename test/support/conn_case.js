export function createConnection({ method = "GET", url = "/" } = {}) {
  return { method, url };
}
