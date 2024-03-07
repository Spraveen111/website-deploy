import React from 'react';
import './App.css';


function App(){
  return (
    <div className="app-container">
      <div>
        <h1 className='wave'><span className='voltus'>Voltus </span>Wave    </h1>
     <div className='a'>
     <label Style="color: white; margin-bottom: 20px">User Name   </label>

      <input type="text" />
     </div>
     <div>
      <lable Style="color:white ">Password         </lable>
      <input type="text" />
     </div>
        </div>
    </div>
  );
}

export default App;
