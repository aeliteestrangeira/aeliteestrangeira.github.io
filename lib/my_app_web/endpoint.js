import { createServer } from "node:http";
import { routeRequest } from "./router.js";

export function createEndpoint(config) {
  return createServer((request, response) => routeRequest(request, response, config));
}
