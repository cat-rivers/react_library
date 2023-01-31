/**
 *
 * File for all authentication related stuff
 */

// get users
function getAllUsers() {
  return axios
    .get(baseUrlUsers)
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
  return getAllUsers().then(
    (data) =>
      data.filter(
        (user) =>
          user.id === id && user.password === password
      )[0]
  );
}
