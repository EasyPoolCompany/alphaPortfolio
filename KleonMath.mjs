export const $pi = Math.PI;
export const $e = Math.E;
export const $hello = "Hello, World!"

export function $isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

export function $sum(...numbers) {
  let result = 0;

  for (let singleNumber of numbers) {
    result += singleNumber;
  }
  return result;
}

export function $isN(number) {
  if (typeof number == "number") {
    return true;
  } else {
    return false;
  }
}

export function $isNaN(number) {
  if (typeof number != "number") {
    return true;
  } else {
    return false;
  }
}

export function $pow (base, exponent) {
    let result = 0;
    result += base ** exponent;
}

export function $divisors (number) {
    let result = "";
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            result += `${i}; `
        } else if ($isPrime(number)) {
            let prime = `${number} is prime D = {1; ${number};}`
            return prime;
        }
    }
    let result2 = `D(${number}) {${result}end}`
    return result2;
}

export function $ArrDivisors(numbers) {
  let result = "";
  for (let number of numbers) {
    let divisors = "";
    for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
        divisors += `${i}, `;
      }
      if ($isPrime(number)) {
        let prime = `${number} is prime D = {1; ${number};}`;
        return prime;
      }
    }
    result += `D(${number}) {${divisors}end}\n`;
  }
  return result;
}

