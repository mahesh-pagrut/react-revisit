const BASE_URL = "https://crudcrud.com/api/2ccc8d0657fb4ca2bbab550c56d10f07/users";

export const getAllUsers = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createUser = async (userData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const updateUser = async (id, updatedData) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });
};
