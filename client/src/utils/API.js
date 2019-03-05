import axios from "axios";

export default {
  // Gets all books
  hitWebHook: function() {
    return axios.get("/api/books");
  }
};
