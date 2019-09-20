import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      < br />
      <Link to="/characters/:id" className="character-button">Total List of Characters</Link>
      <br />

      <header>
        <h1>The Ultimate Fan Site! Wubba Lubba Dub Dub</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}