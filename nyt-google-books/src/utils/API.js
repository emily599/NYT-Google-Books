import axios from "axios";

export default {
  searchBooks: query => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
  }

  //   getBook: function(id) {
  //     return axios.get(`id/api/books${id}`);
  //   }
};
