import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '77b5d65596msh5de9971b028eefbp11f7b8jsn2cca5bb001ed'
    },
  });
    
  return data;
}