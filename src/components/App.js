import React from "react";
// import About from "./About"

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}
function About () {

  return (
      <div id='about'>
          <h2>
              About
          </h2>
      </div>
  )
}
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// function About() {

// }


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
