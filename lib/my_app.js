import { createEndpoint } from "./my_app_web/endpoint.js";
import config from "../config/runtime.js";

const server = createEndpoint(config);

server.listen(config.port, config.host, () => {
  process.stdout.write(`http://${config.host}:${config.port}\n`);
});
