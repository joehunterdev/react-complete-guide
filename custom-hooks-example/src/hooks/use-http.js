import { useState, useEffect } from "react";
/*
  const [isLoading, setIsLoading] = useState(false);
*/
const useHttp = (url = 'https://react-http-89102-default-rtdb.europe-west1.firebasedatabase.app/tasks.json') => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // const interval = setInterval(() => {
        //     if (forwards) {
        //         setCounter((prevCounter) => prevCounter + 1);
        //     } else {setCounter((prevCounter) => prevCounter + 1)}
        // }, 1000);
        
        const fetchTasks = async (taskText) => {
            setIsLoading(true);
            setError(null);
            try {
              const response = await fetch(
                
                url
                
              );
        
              if (!response.ok) {
                throw new Error('Request failed!');
              }
        
              const data = await response.json();
        
              const loadedTasks = [];
        
              for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, text: data[taskKey].text });
              }
              return [{loadedTasks:loadedTasks}];

            //   setTasks(loadedTasks);
            } catch (err) {
              setError(err.message || 'Something went wrong!');
            }
            setIsLoading(false);
            return [{isLoading:false}];

          };
    
          
    }, [fetchTasks]);//rerun everytime state changes

    return [{isLoading:isLoading}];
}
export default useHttp