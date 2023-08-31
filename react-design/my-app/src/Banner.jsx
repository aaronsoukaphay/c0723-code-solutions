export default function Banner({ items }) {
  function displayAnimal() {
    for (let i = 0; i < items.length; i++) {
      return items[0];
    }
  }

  return <h2>{displayAnimal()}</h2>;
}
