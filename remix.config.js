/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/*.css"],
  server: "@remix-run/cloudflare",
  serverModuleFormat: "esm",
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
};