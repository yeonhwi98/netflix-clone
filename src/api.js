import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "933630eb672b2bb0350bc6e4a59c0082",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComming: () => api.get("movie/upcoming"),
  topRated: () => api.get("movie/top_rated"),
  detail: (id) => api.get(`movie/${id}`),
  video: (movie_id) => api.get(`movie/${movie_id}/videos`),
};

// 1.현재 상영 영화
// 2.개봉 예정 영화
// 3.인기 있는 영화
// 4.최신 개봉 영화
