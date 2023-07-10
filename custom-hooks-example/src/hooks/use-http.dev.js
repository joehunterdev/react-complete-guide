import { useState, useEffect } from "react";

/*
  const [isLoading, setIsLoading] = useState(false);
  {task.id}>{task.text}
*/
const useHttp = (url,taskAddHandler) => {
   
    // const [loadedTasks, setLoadedTasks] = useState(0);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const initState = [{isLoading: false, error: false, tasks:[]}]
    
    const [res, setRes] = useState(initState);
    // if(taskAddHandler){  

    //   console.log("taskAddHandler")

    // }
    useEffect(() => {
      //
      const getContent = async (taskText) => {

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Request failed!');
                }

                const data = await response.json();

                const loadedTasks = [];

                for (const taskKey in data) {
                    loadedTasks.push({ id: taskKey, text: data[taskKey].text });
                }
                
                // return [{ tasks: loadedTasks }];

                 setRes({isLoading: false, error: false, tasks:loadedTasks});

            } catch (err) {

                 setError(err.message || 'Something went wrong!');
                 setRes({isLoading: false, error: false, tasks:err.message || 'Something went wrong!'});


                //  return [{error:error}];
        }

      //  setIsLoading(false);
       setRes({isLoading: false, error: false, tasks:[] || 'Something went wrong!'});

      }
     getContent()       
     return res;

    },[url,taskAddHandler]);//rerun everytime state changes

}
export default useHttp


/*
try {
      const response = await fetch(
        'https://react-http-89102-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);  
  };
*/