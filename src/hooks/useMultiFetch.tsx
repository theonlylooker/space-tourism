import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fetch } from "../types/type";
export const useMultiFetch = (fetchs: string[]): Fetch => {
  const [data, setData] = useState<Fetch>({
    loading: false,
    data: { crew: [], destinations: [], technology: [] },
  });
  const fetchURLS = async () => {
    try {
      //   let GET = fetchs.map((element) => axios.get(element));
      //   const response = await Promise.all(GET);
      //   let fetchData = await response.map((element) => element.data);
      const allFetch = await Promise.all(
        fetchs.map(async (url) => {
          const response = await axios.get(url);
          return response.data;
        })
      );
      setData({
        ...data,
        data: {
          destinations: allFetch[0],
          crew: allFetch[1],
          technology: allFetch[2],
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchURLS();
  }, []);
  return data;
};
