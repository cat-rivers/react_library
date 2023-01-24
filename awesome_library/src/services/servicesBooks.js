import axios from "axios";
const baseUrl = "http://localhost:3001/books";

const getAllBooks = () => {
  return axios.get(baseUrl).then(repsonse => Response.data);
};

const editBook = (changedbook, id) => {
  return axios.put(`${baseUrl}/${id}`, changedbook);
};

export default { getAllBooks, editBook };
