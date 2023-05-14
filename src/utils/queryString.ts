export const getQueryString = (queryObject: Record<string, string>) =>
  Object.entries(queryObject)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');
