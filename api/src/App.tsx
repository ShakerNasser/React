import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState("Pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const getPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const result = await response.json();
      const toArray: any = [];
      toArray.push(result);
      console.log(result);
      setPokemonData(toArray);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setPokemon(inputRef.current!.value);
  };

  useEffect(() => {
    getPokemon();
  }, [pokemon]);

  return (
    <>
      <input ref={inputRef} defaultValue={"Pikachu"}></input>
      <button onClick={() => handleClick()}> Get pokemon</button>
      {pokemonData.map((pokemon: any) => (
        <div>
          <img src={pokemon.sprites.front_default} />
          <p> Name: {pokemon.name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
