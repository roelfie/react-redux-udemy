import axios from "axios";

const API_KEY = "AIzaSyA0Q82PfHEkE21EXqfzQPe8S6ITpkadlNA";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const client = axios.create({
  baseURL: BASE_URL
});

export default class Youtube {
  static findVideos(searchTerm) {
    return client.get("/search", {
      params: {
        q: searchTerm,
        maxResults: 5,
        part: "snippet",
        type: "video",
        key: API_KEY
      }
    });
  }
}
