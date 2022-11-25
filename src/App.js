import './App.css';
import Datos from './Componentes/Datos';
import { useState } from 'react';

function App() {
    const [pokemon, setPokemon] = useState('')
    const [pokemonD, setPokemonD] = useState({ sprites: { front_default: null } })

    const onchangefn = (event) => {
        setPokemon(event.target.value)
    }
    const onclickfn = () => {
        //setPokemon( { label:pokemon})
        console.log(pokemon, "https://pokeapi.co/api/v2/pokemon/" + pokemon)
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
            .then(response => response.json())
            .then(
                (pokemonData) => {
                    console.log(pokemonData)
                    setPokemonD(pokemonData)
                }
            )
    }
    return (
        <>
            <div className="App">
                <h1>pokemon</h1>
                <input type="text" value={pokemon} onChange={onchangefn} />
                <button type="" className="btn btn-light" onClick={onclickfn}>buscar</button>
                <br></br>
                <img src={pokemonD.sprites.front_default} className="imagen1"></img>
                <img src={pokemonD.sprites.back_default} className="imagen2"></img>
               <Datos pokemonD={pokemonD} />
            </div>
        </>
    );
}
export default App;
