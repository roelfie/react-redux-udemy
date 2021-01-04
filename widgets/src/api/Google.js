import axios from "axios";

const BASE_URL = "https://translation.googleapis.com/language";
const API_KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"; // Provided in the lectures.

const client = axios.create({
  baseURL: BASE_URL
});

export default class Google {
  static translate(text, language) {
    console.log(`Google.translate(${text}, ${language})`);
    return client.post(
      "/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language,
          key: API_KEY
        }
      }
    );
  }
}
