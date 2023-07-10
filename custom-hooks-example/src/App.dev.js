import React, { StrictMode } from 'react';
import { useState } from 'react';
import useHttp from './hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

const baseUrl = 'https://react-http-89102-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
const initConfig = { url: baseUrl  }
 

function App() {

  const [applyData, setApplyData] = useState([]);
  const [tasks,setTasks]= useState([]);
  // const [isPost, setIsPost] = useState(false)
  // const [taskData, setTaskData] = useState(false)
  // const [taskText, setTaskText] = useState(false)

  const [requestConfig, setRequestConfig] = useState(initConfig);

  const taskAddHandler = (task) => {
    //continually add tasks to current state
    setTasks((prevTasks) => prevTasks.concat(task));
    // setTaskText(task.text);
    // setIsPost(true);
    setApplyData(task);

    setRequestConfig({url: baseUrl})
  };
  
  //  applyData = (data) => {
  //   console.log("im in apply data " + JSON.stringify(data));
  //   return data
  // }


  const taskFetchHandler = () => {
    // setIsPost(false);
    // setTaskData(taskResponse);
    // setTasks(false)
    const postConfig = {
      url: baseUrl, 
      method: 'POST',
      headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
     }
     , body: 'something neww bab'
   }
   setRequestConfig(postConfig)

  };

  const taskResponse = useHttp([requestConfig, applyData]); // this could be state reqType()

  console.log(taskResponse)

  return (
    <StrictMode>
      <NewTask onAddTask={taskAddHandler} />
       <Tasks
        items={applyData}
        // loading={taskResponse.isLoading}
        // error={taskResponse.error}
        onFetch={taskFetchHandler}
      /> 
      {taskFetchHandler}
    </StrictMode>
  );
}

export default App;

