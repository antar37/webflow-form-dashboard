import axios from "axios";

export default {
  // Gets all books
  getLog: function() {
    return axios.post("/api/formHook", {
      title: 'This is the title',
      message: 'This is the message'
    });
  }
};
