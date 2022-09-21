import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Home</Link>
    </div>
  )
}

export default About
