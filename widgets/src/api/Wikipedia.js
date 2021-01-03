import axios from "axios";

const BASE_URL = "https://en.wikipedia.org/w";

const client = axios.create({
  baseURL: BASE_URL
});

export default class Wikipedia {
  static search(term) {
    return client.get("/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term
      }
    });
  }

  // https://www.mediawiki.org/wiki/API:Info
  // https://stackoverflow.com/questions/6168020/what-is-wikipedia-pageid-how-to-change-it-into-real-page-url
  // But for some reason this call does not return fullurl / canonicalurl
  static getPageInfo(pageId) {
    return client.get("/api.php", {
      params: {
        action: "query",
        pageids: pageId,
        origin: "*",
        format: "json",
        prop: "info",
        inprop: "url"
      }
    });
  }
}
