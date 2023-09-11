//block scope oridinary variables
import {useState,useEffect } from "react";

//defined outside hook
let globalState = {};
let listeners = [];
let actions = {}

const useStore = () => {

    // useState(globalState);
    //only interested in 2nd value
    const setState = useState(globalState)[1];

    const dispatch = actionIdentifier => (actionIdentifier,payload) => {

        //now a function call with parenthesis
       const newState = actions[actionIdentifier](globalState);
       globalState = {...globalState,...newState};

       //informa all listeners
       for (const listener of listeners){
           listener(globalState); //updates react state
       }

    };

    useEffect(() => {
        //using closure value will be preserved when comp unmounts
        listeners.push(setState);
        return () => {
            listeners = listeners.filter(li => li !== setState);
        }
    }, [setState]);
   
 return [globalState,dispatch];
}

//enable changing actions
export const initStore = (userActions,initialState) => {
    if(initialState){
        globalState = {...globalState,...initialState};
    }
    actions = {...actions,...userActions};
}


