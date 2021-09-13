function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  let result = n;

  do {
    result = result * (n - 1);
    n = n - 1;
  }

  while (n > 1);
  return result;
}

console.log(factorial(5));
