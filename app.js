console.log("Hello World!\n==========\n");

// Exercise 1: 
console.log("EXERCISE 1:\n==========\n");

for ( let i = 1; i <= 100; i++) {
    if ( i % 2 ) {
        console.log(i); 
    }
}


// Exercise 2: 
console.log("EXERCISE 2:\n==========\n");

for ( let i = 1; i <= 100; i++) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log('FIZZBUZZ'); 
    } else if ( i % 3 == 0) {
        console.log('FIZZ'); 
    } else if ( i % 5 == 0 ) {
        console.log('BUZZ')
    } else {
        console.log(i);
    }
}

// Exercise 3.1 
//While Loop:
let i = 1; 

while (i <= 100 ) {
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log('FIZZBUZZ'); 
    } else if ( i % 3 == 0) {
        console.log('FIZZ'); 
    } else if ( i % 5 == 0 ) {
        console.log('BUZZ')
    } else {
        console.log(i);
    }
    i++; 
} 

// Exercise 3.2
//Do While Loop: 
let i = 1; 
do {
    if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log('FIZZBUZZ'); 
    } else if ( i % 3 == 0) {
        console.log('FIZZ'); 
    } else if ( i % 5 == 0 ) {
        console.log('BUZZ')
    } else {
        console.log(i);
    }
    i++; 
} while (i <= 100 ); 



//Exercise 4:
let value = Math.round(Math.random() * 500); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for ( let i = 0; i <= n; i++) {
    if (i == value) {
        console.log(`Found ${value}!`); 
        break; 
    } 
    if (i == n) {
        console.log(`Did not find ${value} within 0 - ${n}`); 
    }
}

//OR 
let value = Math.round(Math.random() * 500); 
let n = Math.round(Math.random() * (500 - 100) + 100);
let foundValue; 

for ( let i = 0; i <= n; i++) {
    if (i == value) {
        foundValue = true; 
        break; 
    }
}

if (foundValue) {
    console.log(`Found ${value}!`); 
    } else {
    console.log(`Did not find ${value} within 0 - ${n}`); 
}





//Exercise 5: 
let fizzDivisor = Math.round(Math.random() * (10 -1) + 1); 
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1); 
let start = Math.round(Math.random() * (10 - 1) + 1); 

for (let i = start; i <= n; i++) {
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0) {
        console.log('FIZZBUZZ');
    } else if (i % fizzDivisor == 0) {
        console.log('FIZZ');
    } else if (i % buzzDivisor == 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
      }
} 