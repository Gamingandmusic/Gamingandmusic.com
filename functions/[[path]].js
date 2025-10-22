import { createPagesFunctionHandler } from "@remix-run/cloudflare";
import * as build from "../build/server/index.js";

const handler = createPagesFunctionHandler({ build });

export const onRequest = handler;