import "../styles/pokemonBox.css";
import React, { useState, useEffect } from "react";

// Generate the random number only once
const randomNumber = Math.floor(Math.random() * 151) + 1;

export default function RandomPokemon() {
  const [pokemonName, setPokemonName] = useState("Loading...");

  useEffect(() => {
    const fetchPokemonName = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon-form/${randomNumber}`
        );
        const data = await response.json();
        setPokemonName(data.name);
      } catch (error) {
        console.error("Error fetching Pokémon name:", error);
        setPokemonName("Error fetching name");
      }
    };

    fetchPokemonName();
  }, []); // Dependency array ensures it only runs once


  const handleRefresh = () => {
    window.location.reload();  // Reloads the page when clicked
};


  return (
    <div className="pokemonBox">
      <h1>
        Pokemon #{randomNumber}: <span>{pokemonName}</span>
      </h1>
      <img
        className="pokemonImage"
        alt="Cannot find"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`}
      />

      <br/>
      <br/>
      <button className ="buttonRandom" onClick={handleRefresh}>Generate Another!</button>

    </div>
  );
}
