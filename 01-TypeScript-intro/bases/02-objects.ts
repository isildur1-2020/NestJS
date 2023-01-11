export const pokemonIds: number[] = [1, 2, 3];
export const pokemonNames: string[] = ["a", "b", "c", "d"];

interface Pokemon {
  id: number;
  name: string;
}

export const bulbasor: Pokemon = {
  id: 1,
  name: "Bulbasor",
};

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasor);
