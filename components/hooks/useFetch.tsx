import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [Fetching, setFetching] = useState(true);
  const [FetchedData, setFetchedData] = useState(null);
  const [Error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchedData(data);
        setFetching(false);
      })
      .catch((err) => {
        setError(err.msg);
      });
  }, [url]);

  return { FetchedData, Fetching, Error };
};

export default useFetch;
