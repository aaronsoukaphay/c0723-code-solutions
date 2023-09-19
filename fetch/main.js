async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log(`HTTP error! Status: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
}

getData('https://jsonplaceholder.typicode.com/users');
getData('https://pokeapi.co/api/v2/pokemon/1');
