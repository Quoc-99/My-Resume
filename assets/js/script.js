// Bài 1: Check prime

// Cách 1:
/* 
function isPrime(n) {
    var divisor = 2; // Số chia

    while(n > divisor) {
        if(n % divisor == 0) {
            return false;
        } else {
            divisor++;
        }
    }
    return true;
}

console.log(isPrime(237));

*/

// Cách 2:
/* function isPrime(n) {
    var divisor = 3;
    var limit = Math.sqrt(n);

    if(n == 2 || n == 3) {
        return true;
    }
    if(n % 2 == 0) {
        return false;
    }

    while(divisor <= limit) {
        if(n % divisor == 0) {
            return false;
        } else {
            divisor += 2;
        }
    }
    return true;
}

console.log(isPrime(137)); */

// Bài 2: Phân tích 1 số ra thừa số nguyên tố

function primeFactors(n) {
    var factors = [];
    var divisor = 2;

    while(n > 2) {
        if(n % divisor == 0) {
            factors.push(divisor);
            n = n / divisor;
        } else {
            divisor++;
        }
    }

    console.log(factors);
}

primeFactors(69)

