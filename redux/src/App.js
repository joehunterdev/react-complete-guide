import Counter from './components/Counter';
// import { Provider } from 'react-redux'
// import store from './store'


// const counterSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState)

// }

// store.subscribe(counterSubscriber)

// store.dispatch({type:'increment'})


// store.getState()
function App() {
  return (
    // <Provider store={store}>
     <Counter />
    // </Provider>
  );
}

export default App;
