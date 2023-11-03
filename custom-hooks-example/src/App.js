import React, { useEffect, useState } from 'react';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';
const baseUrl = 'https://react-http-89102-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
 
/*
destructure useHttp
handle data transformation here in useEffect
useeffect usess a taks object as dependancy for which it has itsz own call back method to pull and
//use effects have cleanup methods
*/

function App() {
 
    const [tasks, setTasks] = useState([]);
    const { isLoading, error, sendRequest:fetchTasks } = useHttp(); // neatly unpack declare above top level

    //make successfull useHttp request
    //transform 
    useEffect(() => {

        const taskList = (data) => {
            const loadedTasks = [];
            for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }
            setTasks(loadedTasks)
        }
 
      fetchTasks({ url: baseUrl }, taskList) //call back here

    }, [fetchTasks])//dependancies

    const taskAddHandler = (task) => {
        setTasks((prevTasks) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;