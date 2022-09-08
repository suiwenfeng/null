import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "./stories/assets/logo.svg"
import { LogoIcon } from "./stories/components/Icon"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <LogoIcon link="#" className="a">
          <LogoSvg/>
        </LogoIcon>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
        <LogoSvg/>
      </nav>
    </>
  );
}

export default App;
