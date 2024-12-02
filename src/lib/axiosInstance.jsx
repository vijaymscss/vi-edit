// src/hooks/useAxios.js
import { useState } from "react";
import axios from "axios";

const useAxios = (url, method = "GET", requestData = null, config = {}) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method,
        url,
        data: requestData,
        ...config,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

export default useAxios;
