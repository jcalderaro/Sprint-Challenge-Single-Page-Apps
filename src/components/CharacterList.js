import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard';
import { Link } from "react-router-dom";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const character = response.data.results;
        console.log("response", response.data.results);
        setCharacter(character);
      });
  }, []);

  return (
    <section className="character-list">
      {character.map(characters => {
        return (
          <Link to={`/characters/${characters.id}`} >
            <CharacterCard
              name={characters.name}
              gender={characters.gender}
              species={characters.species}
              status={characters.status}
              image={characters.image}
            />
          </Link>
        );
      })}
    </section>
  );
}