// -- Prismic API endpoint
export const apiEndpoint = "https://lamesarv-phil.cdn.prismic.io/api/v2";
// -- Access Token if the repository is not public
export const accessToken = "";

export const repoName = "lamesarv-phil";

// -- Link resolution rules
export const linkResolver = (doc) => {
  if (doc.uid === "home") {
    return `/`;
  }
  if (doc.type === "landing_page") {
    return `/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === "page") {
    return "/[uid]";
  }
  return "/";
};
