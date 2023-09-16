function calculateFactorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
}

// Teste a função
console.log(calculateFactorial(5)); // Saída esperada: 120
console.log(calculateFactorial(0)); // Saída esperada: 1
console.log(calculateFactorial(10)); // Saída esperada: 3628800
