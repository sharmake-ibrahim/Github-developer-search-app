import React, {useEffect, useState} from "react";
import "./Scss/Style.scss";
import DisplayProfile from "./Components/DisplayProfile"


function App() {

  // Octokit.js
// https://github.com/octokit/core.js#readme

async function Data(name) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  const data = await res.json();
  console.log("One the of the developer that use github", data)
}



useEffect( ()=> {
  Data("sharmake-ibrahim");
},[])

  return (
      <main>
          <DisplayProfile/>
      </main>
  )
}

export default App
