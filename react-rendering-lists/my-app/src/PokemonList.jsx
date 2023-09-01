export default function PokemonList({ pokedex }) {
  const pokemon = pokedex.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));

  return <ul>{pokemon}</ul>;
}
