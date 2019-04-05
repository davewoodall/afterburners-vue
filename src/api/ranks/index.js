import API from "@/api/base";
const baseUrl = "http://localhost:3000/v1/ranks";

const getRankByGenre = async (query, order, limit = 10) => {
  const rank = `${baseUrl}/genre`;
  return await API.get(rank);
};

export default {
  getRankByGenre
};
