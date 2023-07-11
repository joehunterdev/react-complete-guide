
import { useState, useCallback } from "react";

const useHttp = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async (requestConfig, applyData) => {

    setIsLoading(true)
    setError(null)

    try {

      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null, 
      //  mode: 'no-cors',
        // 'Access-Control-Allow-Origin': '*'
      })
      // console.log(response);

      if (!response.ok) {

        throw new Error("No response")

      }

      const data = await response.json();

      if (!data) {

        throw new Error("No data")

      }

      applyData(data) //is returned for fetchTask ?
      setIsLoading(false)

    } catch (err) {

      setError(err.message || "Your a mong")
      setError(null)

    }



  }, []);

  return { isLoading, error, sendRequest };
}


export default useHttp

