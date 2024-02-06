import axios from "axios";

const API_KEY = "3ce43aca27704fb3bb7cb5d9e477b0df";

const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

export const getGames = async (genre) => {
  try {
    const response = await rawgApi.get("games", {
      params: {
        key: API_KEY,
        genres: genre,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
