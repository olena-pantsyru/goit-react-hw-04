import axios from "axios";

const keyApiUnsplash = "3MWM5wVuSxC4QxpiBL-Oa1lc3Y76owEJjOdw6KHEDlU";

export const fetchPhoto = async (query = "cat", page) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      per_page: 12,
      client_id: keyApiUnsplash,
    },
  });
  return response.data.results;
};