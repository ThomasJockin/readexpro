
export function sample(array,size) {
  const results = [],
        sampled = {};

  while(results.length < size && results.length < array.length) {
    const index = Math.trunc(Math.random() * array.length);
    if(!sampled[index] && array[index].length >= 6) {
      results.push(index);
      sampled[index] = true;
    }
  }

  return results;
}

export function randomNumber (array) {
  return Math.floor(Math.random() * array.length/4)
}
