import { useEffect, useState, useCallback } from "react";
import { baseAxios } from "../api/baseAxios";

function useApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await baseAxios();
      setData(response.data);
    } catch (err) {
      setError("Maʼlumotlarni yuklashda xatolik yuz berdi  Bozorchi.uz Saytni Topa Olmadi ");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    loading,
    error,
    retry: getData, 
  };
}

export default useApi;
