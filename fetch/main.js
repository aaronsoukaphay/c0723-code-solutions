async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log('fetch failed!', error);
  }
}

getData('https://jsonplaceholder.typicode.com/users');
getData('https://pokeapi.co/api/v2/pokemon/1');
