export function isSingleNumberPrime(number: number): boolean {
  if (!Number.isInteger(number)) {
    alert("Input must be an integer!");
  }
  if (number <= 1) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}
