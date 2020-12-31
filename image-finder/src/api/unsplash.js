import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: { Authorization: "Client-ID nx6aTsWQ-I-yPt9Lbgue69MtRgn7PTVueQNkMRwb6rs" }
});
