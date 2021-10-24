import React, { useState, useEffect } from "react";
import { API_ENDPOINT } from "./context";

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }

      setLoading(false);
    } catch (error) {
      console.log("error :", error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${urlParams}`);
  }, [urlParams]);

  return { loading, error, data };
};

export default useFetch;
