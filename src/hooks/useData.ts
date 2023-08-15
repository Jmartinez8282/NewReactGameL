import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";





interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsloading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setIsloading(false);
      })

      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsloading(false);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {}, []);

  return { data, error, isloading };
};

export default useData;
