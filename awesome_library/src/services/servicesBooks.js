import axios from "axios";
const baseUrlBooks = "http://localhost:3001/books";
const baseUrlUsers = "http://localhost:3001/users";

const getAllBooks = () => {
  return axios.get(baseUrlBooks).then(repsonse => Response.data);
};

const editBook = (changedbook, id) => {
  return axios.put(`${baseUrlBooks}/${id}`, changedbook);
};

<<<<<<< HEAD
export default { getAllBooks, editBook };
=======
const getAllUsers = () => {
  return axios.get(baseUrlUsers).then(repsonse => Response.data);
};

const editUser = (changedUser, id) => {
  return axios.put(`${baseUrlUsers}/${id}`, changedUser);
};

const deleteUser = id => {
  return axios.delete(`${baseUrlUsers}/${id}`).then(response => response.data);
};

const createNewUser = newUser => {
  return axios.post(baseUrlUsers, newUser).then(response => response.data);
};

export {
  getAllBooks,
  editBook,
  editUser,
  getAllUsers,
  deleteUser,
  createNewUser,
};
>>>>>>> main
