import { writable } from 'svelte/store';

export const pokemon = writable([]);

let limit = 151;

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemnon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
	pokemon.set(loadedPokemnon);
};

fetchPokemon();
