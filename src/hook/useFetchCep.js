import { useState } from "react";
import { api } from "../service/api";

export function useFetchCep() {
  const [isLoading, setIsLoading] = useState(false);

  const getCep = async (cep, setData) => {
    setIsLoading(true);
    try {
      const result = await api.get(`/${cep}/json/`);
      const delay = () => {
        setData(result.data)
        setIsLoading(false)
      }
      setInterval(() => delay(), 1000);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  return { getCep, isLoading };
}
