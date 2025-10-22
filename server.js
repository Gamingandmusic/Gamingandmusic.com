import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "./dist/index.js";

const handleRequest = createPagesFunctionHandler({ build });

export default {
  fetch: handleRequest,
};