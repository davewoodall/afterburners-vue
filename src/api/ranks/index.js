import API from "@/api/base";
const resourceURL = "v1/ranks";

const getRankByGenre = async query => {
  const rank = `${resourceURL}/genre`;
  return await API.get(rank);
};

const getRankByYear = async query => {
  const rank = `${resourceURL}/year`;
  return await API.get(rank);
};

const rankURL = resource => {
  return `${API.URL()}/${resourceURL}/${resource}`;
};

export default {
  rankURL,
  getRankByGenre,
  getRankByYear
};
