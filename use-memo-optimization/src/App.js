import logo from './logo.svg';
import './App.css';
import { useState, useCallback,useMemo } from'react';
import DemoList from './components/DemoList';
import Button from './components/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle("new title");
 }, [] )

  const listItems = useMemo(() => [5,3,1,10,9],[])

  return (
    <div className="App">
        <DemoList title={listTitle} items={listItems}></DemoList>
        <Button onClick={changeTitleHandler}>Change title handler</Button>
    </div>
  );
}

export default App;
