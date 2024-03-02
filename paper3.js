// Introduction to Objects

// 1. Note: country selection is based on my choice......
let myCountry = {
    country: 'Afghanistan',
    capital: 'Kabul',
    language: 'Dari',
    population: 38,
    neighbours: ['Pakistan', 'Iran', 'Turkmenistan', 'Uzbekistan', 'Tajikistan', 'China']
};


// Dot vs. Bracket Notation

// 1.  ....confusing pointsss.....
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries, and a capital called ${myCountry.capital}.`);

// 2. 
myCountry.population += 2;
myCountry['population'] -= 2;


// Object Methods

// 1. 
myCountry.describe = function() {
    console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries, and a capital called ${this.capital}.`);
};

// 2. Call the 'describe' method
myCountry.describe();

// 3. Based on the script....
myCountry.checkIsland = function() {
    this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.checkIsland();
console.log(myCountry.isIsland);