/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/*.css"],
  server: "@remix-run/cloudflare",
  serverModuleFormat: "esm",
  serverBuildPath: "functions/[[path]].js",
  serverPlatform: "neutral",
  serverDependenciesToBundle: "all",
  serverMainFields: ["browser", "module", "main"],
  serverConditions: ["worker", "browser"],
  serverMinify: true,
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
  // Explicitly set the server entry file to use our custom one
  serverEntryPoint: "app/entry.server.tsx",
};