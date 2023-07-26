/* exported titleCase */
function titleCase(title) {
  const splitted = title.toLowerCase().split(' ');
  console.log(splitted);
  const banned = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
  ];
  const result = [];
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].split('').includes('-')) {
      const hyphenSplit = splitted[i].split('-');
      const hyphenResult = [];
      for (let j = 0; j < hyphenSplit.length; j++) {
        hyphenResult.push(
          hyphenSplit[j].charAt(0).toUpperCase() + hyphenSplit[j].slice(1)
        );
      }
      result.push(hyphenResult.join('-'));
    } else if (splitted[i] === 'javascript') {
      result.push('JavaScript');
    } else if (splitted[i] === 'javascript:') {
      result.push('JavaScript:');
    } else if (splitted[i] === 'api') {
      result.push('API');
    } else if (i === 0) {
      result.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1));
    } else if (
      banned.includes(splitted[i]) &&
      splitted[i - 1].split('').includes(':')
    ) {
      result.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1));
    } else if (!banned.includes(splitted[i])) {
      result.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1));
    } else if (splitted[i].length >= 4) {
      result.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1));
    } else {
      result.push(splitted[i]);
    }
  }
  console.log(result.join(' '));
  return result.join(' ');
}
