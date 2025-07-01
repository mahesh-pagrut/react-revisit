export const getBooksFromStorage = () => {
  const data = localStorage.getItem("books");
  return data ? JSON.parse(data) : [];
};
