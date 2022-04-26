import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-rapidAPI-host': 'bayut.p.rapidapi.com',
      'X-rapidAPI-key': process.env.NEXT_PUBLIC_API_TOKEN ,
    },
  });
    
  return data;
}