import config from "./config.js";
import development from "./dev.js";
import production from "./prod.js";
import test from "./test.js";

const environments = { development, production, test };

export function runtimeConfig(environment = process.env.NODE_ENV ?? "development") {
  const selected = environments[environment] ?? development;

  return Object.freeze({
    ...config,
    ...selected,
    host: process.env.HOST ?? selected.host,
    port: Number(process.env.PORT ?? selected.port),
  });
}

export default runtimeConfig();
