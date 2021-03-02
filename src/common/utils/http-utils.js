import queryString from "query-string";

export const parseJSON = (response) => response.json();
export const fetchJSON = (url, payload) => {
  url = addQueryParams({ url, body: payload });
  return fetch(url).then(parseJSON);
};
export const addQueryParams = ({ url, body }) => {
  if (body) {
    const newUrl = url.concat("&");

    return newUrl.concat(queryString.stringify(body));
  }

  return url;
};
