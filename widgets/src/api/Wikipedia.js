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
}
