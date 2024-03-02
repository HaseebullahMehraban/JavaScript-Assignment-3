// Looping Arrays, Breaking and Continuing

// 1. Note: the populations are based on the previous assignment which are Af, USA, UK and Russisa 
let populations = [38000000, 331000000, 66000000, 144000000];

// 2. Note: if world populaiton is equal to 7 billion.....
let percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push((populations[i] / 7000000000) * 100);
}

// 3.  Note: just according to prevrious assignment 
let percentages = [0.5428571428571428, 4.728571428571428, 0.9428571428571428, 2.057142857142857];

console.log(percentages2);
console.log(percentages2.length === percentages.length);


// Looping Backwards and Loops in Loops

// 1. Store this array of arrays into a variable called 'listOfNeighbours' [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
let listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

// 2. note much sure!!!!??   Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country
for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
    }
}


// The while Loop

// 1. Based on the script......
let percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push((populations[i] / 7000000000) * 100);
    i++;
}

// 2. Reflect on what solution you like better for this task: the for loop or the while loop?
console.log(percentages3);
console.log(percentages3.length === percentages.length);