import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getPokemon = async (pokemon: string) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const result = await response.json();
      const toArray: any = [];
      toArray.push(result, ...pokemonData);
      console.log(result);
      setPokemonData(toArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    getPokemon(inputRef.current!.value);
  };

  return (
    <>
      <input ref={inputRef} defaultValue={""}></input>
      <button onClick={() => handleClick()}> Get pokemon</button>
      {pokemonData.map((pokemon: any) => (
        <div key={pokemon.id}>
          <img src={pokemon.sprites.front_default} />
          <p> Name: {pokemon.name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
