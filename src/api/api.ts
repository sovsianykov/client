import { useEffect, useState } from "react";
import axios from "./axios";

export const BASE_URL = "auth/registration";
export const useFetch =  (url:string,method:string, data?:any) => {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(  () => {
    setIsLoading(true);
    try {
       axios.get(url,).then((r) => setResponse(r.data)).then(
           ()=>setIsLoading(false)
       );

    } catch (e:any) {
      console.log(e.message);
      setError(e);
    }


  },[ url]);
  return { response, isLoading, error };
};
