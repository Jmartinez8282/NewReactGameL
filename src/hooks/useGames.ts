import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

   export interface Platform {
    id: number;
    name: string;
    slug: string;
  }


 export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[]
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {

    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games",{signal: controller.signal})
      .then((response) => setGames(response.data.results))
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message)});

      return () => controller.abort();
  }, []);


  useEffect(() => {
  
  }, [])

  return {games, error}
};

export default useGames;
