import axios from "axios";
const baseUrlBooks = "http://localhost:3001/books";
const baseUrlUsers = "http://localhost:3001/users";

function getAllBooks() {
  return axios.get(baseUrlBooks).then(response => response.data);
}

function editBook(changedbook, id) {
  return axios.put(`${baseUrlBooks}/${id}`, changedbook);
}

function getAllUsers() {
  return axios.get(baseUrlUsers).then(response => response.data);
}

function editUser(changedUser, id) {
  return axios.put(`${baseUrlUsers}/${id}`, changedUser);
}

function deleteUser(id) {
  return axios.delete(`${baseUrlUsers}/${id}`).then(response => response.data);
}

function createNewUser(newUser) {
  return axios.post(baseUrlUsers, newUser).then(response => response.data);
}

// const funcs = {
//   getAllBooks,
//   editBook,
//   editUser,
//   getAllUsers,
//   deleteUser,
//   createNewUser,
// };

export default getAllBooks;
