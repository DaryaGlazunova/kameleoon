export const removeProtocol = (siteUrl: string | undefined): string => {
  if (!siteUrl) {
    return "";
  }

  return siteUrl.replace(/(^\w+:|^)\/\//, "").replace("www.", "");
};
