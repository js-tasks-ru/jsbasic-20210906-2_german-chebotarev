function getMinMax(str) {

  let numbersOnly = str.split(' ').filter((value) => value !== '' && isFinite(value));

  return {
    max: Math.max(...numbersOnly),
    min: Math.min(...numbersOnly)
  };

}
