const getBookMartFromLS = () => {
  const storedBookmark = localStorage.getItem("bookmark");

  if (storedBookmark) {
    return JSON.parse(storedBookmark);
  }
  return [];
};

export { getBookMartFromLS };
