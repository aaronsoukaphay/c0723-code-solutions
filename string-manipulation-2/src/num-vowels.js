/* exported numVowels */
function numVowels(string) {
  let counter = 0;
  const splitted = string.toLowerCase().split('');
  for (let i = 0; i < splitted.length; i++) {
    switch (splitted[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        counter++;
    }
  }
  return counter;
}
