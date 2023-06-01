import axios from "axios";

// get all users
export const getAllUsers = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
};

// get user detaisl by id
export const getUserId = async (id) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.data;
};
