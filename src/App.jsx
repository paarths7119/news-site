import Navbar from "./Components/Navbar"
import Newsboard from "./Components/Newsboard"
import { useState,useEffect } from "react";
import './css3.css';

const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <div className="main">
      <h1>News</h1>
      <Newsboard category={category}/>
      </div>
    </div>
  )
}

export default App
