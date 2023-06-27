import axios from "axios";
import { AxiosResponse } from "axios";
interface SpotifyToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}

const api = axios.create({
  baseURL: import.meta.env.VITE_SPOTIFY_BASE_URL,
});


const getToken = () => {
  new Promise((resolve, reject) => {
    axios
      .post(
        "https://accounts.spotify.com/api/token",
        {
          grant_type: "client_credentials",
          client_id: import.meta.env.VITE_SPOTIFY_ID,
          client_secret: import.meta.env.VITE_SPOTIFY_SECRET,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response: AxiosResponse<SpotifyToken>) => {
        api.defaults.headers.Authorization = `${response.data.token_type} ${response.data.access_token}`;
       sessionStorage.setItem('auth', JSON.stringify(response.data))

        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

if (!api.defaults.headers.Authorization) {
  if (!sessionStorage.getItem("auth")) {
    // getToken()
  }
  else {``
    const authData = JSON.parse(sessionStorage.getItem('auth')!)
    api.defaults.headers.Authorization = `${authData.token_type} ${authData.access_token}`;
  }
}

api.interceptors.response.use(function (response){
  return response
}, function (error) {
  if(error.response.status === 401) return getToken()
  return error
})

export default api;