import axios from "axios";
const baseUrlBooks = "http://localhost:3001/books";
const baseUrlUsers = "http://localhost:3001/users";

function getBook(id){
  return axios
    .get(`${baseUrlBooks}/${id}`)
    .then((response) => response.data);
}

function getUser(id){
  return axios
    .get(`${baseUrlUsers}/${id}`)
    .then((response) => response.data);
}

function getAllBooks() {
  return axios
    .get(baseUrlBooks)
    .then((response) => response.data);
}

function editBook(changedbook, id) {
  return axios.put(`${baseUrlBooks}/${id}`, changedbook);
}

function getAllUsers() {
  return axios
    .get(baseUrlUsers)
    .then((response) => response.data);
}

function editUser(changedUser, id) {
  return axios.put(`${baseUrlUsers}/${id}`, changedUser);
}

function deleteUser(id) {
  return axios
    .delete(`${baseUrlUsers}/${id}`)
    .then((response) => response.data);
}

function createNewUser(newUser) {
  return axios
    .post(baseUrlUsers, newUser)
    .then((response) => response.data);
}

/**
 * Function that takes user credentials and returns authenticated user
 * or false if credentials do not match.
 *
 * @param {*} id
 * @param {*} password
 */
function checkCredentials(id, password) {
  return getAllUsers().then((data) => {
    //console.log(data);
    return data.filter(
      (user) =>
        user.id.toString() === id &&
        user.password === password
    )[0];
  });
}

export {
  getBook,
  getUser,
  getAllBooks,
  editBook,
  editUser,
  getAllUsers,
  deleteUser,
  createNewUser,
  checkCredentials,
};
