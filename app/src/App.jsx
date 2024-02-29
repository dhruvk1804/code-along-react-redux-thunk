import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions/userActions';
import UserData from "./components/userData";

import "./App.css"

function App() {
  const dispatch = useDispatch();
  const [isDataFetched, setIsDataFetched] = useState(false);

  let [state1,setState]=useState(false)



  const fetchData = () => {
    dispatch(fetchUsers());
    setState(!state1)
    setIsDataFetched(true);
  };
  

 
  return (
    <div className="App"  >
    
    <button  onClick={fetchData}>Fetch Data</button>
    <UserData value={state1} setState={setState}/>
  
    </div>
  );
}

export default App;