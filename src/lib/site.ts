const configuredUrl =
  import.meta.env.SITE ??
  import.meta.env.PUBLIC_SITE_URL ??
  "https://ideilsondev.vercel.app";
export const siteUrl = new URL(configuredUrl);
export const siteName = "Ideilson | Engenharia de Software";
