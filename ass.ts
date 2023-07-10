//question 2
const name1 = "syed zaryab ahmed";
console.log(`hello ${name1},would you like to learn some python today?`);
//question3
const name2 = "syed zaryab ahmed"
console.log(`hello ${name2.toLowerCase()},would you like to learn some python today?`);
console.log(`hello ${name2.toUpperCase()},would you like to learn some python today?`);
console.log(`Hello ${toTitleCase(name2)}, would you like to learn some Python today?`);

function toTitleCase(str) {
  return str.replace(/\w\s*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
//question 4
console.log(`Prophet Muhammad said,"He who is not grateful to people is not grateful to God.`);
//question 5
const author = "Prophet Muhammad";
const quote = "He who is not grateful to people is not grateful to God.";
console.log(`${author} said,"${quote}`);
//question 6
const name3 = "sjn      6\t      syed zaryab ahmed \n";

console.log("Name with whitespace:");
console.log(name3);

const nameStripped = name3.trim();
console.log("Name after stripping whitespace:");
console.log(nameStripped);
//question 7
console.log(5 + 3);//addition
console.log(10 - 2);  //subtraction
console.log(4 * 2); //multiplication
console.log(32 / 4);//division
//question 8
console.log(5 + 3);
console.log(4 + 4);
console.log(3 + 5);
console.log(6 + 2);
//question 9
var myfavoriteNumber = "7 or 8";
var printmessage = `My favorite number is ${myfavoriteNumber}!`;
console.log(printmessage);
//question 10
//first part

// Program written by [Your Name]
// Date: [Current Date]
let number = 17;

if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}

//part 2
// Program written by [Your Name]
// Date: [Current Date]

// Define the dimensions of the rectangle
let length1 = 10; // length of the rectangle
let width = 5; // width of the rectangle

// Calculate the area of the rectangle
let area = length1 * width;


console.log("The area of the rectangle is: " + area);




//question 11
let names = ["Danial", "ayan", "hasnain", "abdulrehman"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
//question 12
let name4 = ["Danial", "ayan", "hasnain", "abdulrehman"];
let greeting = "Hello, ";

for (let i = 0; i < name4.length; i++) {
  let message = greeting + names[i] + " Welcome!";
  console.log(message);
}
//question 13
const motorcycles = ["Honda civic", "Kawasaki Ninja H2R", "Suzuki 150"];

for (const motorcycle of motorcycles) {
  console.log(`I would like to own a ${motorcycle}.`);
}
//QUestion14


let guestList = [`syed zaryab ahmed`, `ayan`, `shayan`];

console.log("Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, you are cordially invited to dinner at my place!`));
//question 15
const guestCantMakeIt = guestList.splice(1, 1)[0];
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.`);

const newPerson = "azam";
guestList.splice(1, 0, newPerson);


console.log("\nUpdated Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner at my place!`));

console.log("\nGood news! I found a bigger dinner table!");
// questuion 16
guestList.unshift("ibad");
guestList.splice(Math.floor(guestList.length / 2), 0, "abdul");
guestList.push("danial");

console.log("\nAdditional Invitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner at my place!`));
// question 17
console.log("\nUnfortunately, due to a delay in the dinner table arrival, only two people can be invited for dinner.");

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

console.log("\nInvitation Messages:");
guestList.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner at my place!`));

guestList.length = 0;
console.log("\nFinal Guest List:");
console.log(guestList);
// question 18
let placesToVisit = ['PARIS', 'TOKYO', 'ISTANBUL', 'USA', 'JAPAN'];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order (Unchanged):");
console.log(placesToVisit);

placesToVisit.reverse();

console.log("\nReversed Order:");
console.log(placesToVisit);

placesToVisit.reverse();

console.log("\nOriginal Order (Reversed):");
console.log(placesToVisit);

placesToVisit.sort();

console.log("\nAlphabetical Order:");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));

console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit);
// question 19
let guestList1 = [`syed zaryab ahmed`, `ayan`, `shayan`];

console.log("Initial Guest List:");
guestList1.forEach(guest => console.log(guest));

const numGuests = guestList1.length;
console.log(`Number of guests invited to dinner: ${numGuests}`);
// question 20
// countries
let countries = ['Canada', 'France', 'Australia', 'Japan', 'Brazil'];
console.log("List of Countries:");
console.log(countries);
// language
let language = ['URDU', 'ENGLISH', 'HINDI', 'ARABI', 'SINDHI'];
console.log("List of language:");
console.log(language);
// mountain
let mountains = ['Everest', 'K2', 'Kangchenjunga', 'Matterhorn', 'Denali'];
console.log("List of Mountains:");
console.log(mountains);
// question 21
let canada = {
  name: 'Canada',
  capital: 'Ottawa',
  population: 37590000,
  officialLanguage: 'English and French'
};

let france = {
  name: 'France',
  capital: 'Paris',
  population: 66990000,
  officialLanguage: 'French'
};

let australia = {
  name: 'Australia',
  capital: 'Canberra',
  population: 25720000,
  officialLanguage: 'English'
};

console.log("Country Objects:");
console.log(canada);
console.log(france);
console.log(australia);
// question 22
let numbers = [1, 2, 3, 4, 5];

console.log(numbers[10]);


if (numbers.length >= 11) {
  console.log(numbers[10]);
  console.log("Invalid index");
}
// question 23
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

let age = 25;

console.log("Is age > 18? I predict True.");
console.log(age > 18);

console.log("Is age < 18? I predict False.");
console.log(age < 18);

let temperature = 30;

console.log("Is temperature >= 25? I predict True.");
console.log(temperature >= 25);

console.log("Is temperature <= 20? I predict False.");
console.log(temperature <= 20);

let fruits = ['apple', 'banana', 'orange'];

console.log("Is fruits.length == 3? I predict True.");
console.log(fruits.length == 3);

console.log("Is fruits.length == 5? I predict False.");
console.log(fruits.length == 5);


// question 24
// Tests for equality and inequality with strings
let city = 'New York';

console.log("Is city == 'New York'? I predict True.");
console.log(city == 'New York');

console.log("Is city != 'Los Angeles'? I predict True.");
console.log(city != 'Los Angeles');

console.log("Is city == 'London'? I predict False.");
console.log(city == 'London');

console.log("Is city != 'New York'? I predict False.");
console.log(city != 'New York');

// Tests using the lowercase function
let name6 = 'John';

console.log("Is name.toLowerCase() == 'john'? I predict True.");
console.log(name6.toLowerCase() == 'john');

console.log("Is name.toLowerCase() == 'Mary'? I predict False.");
console.log(name6.toLowerCase() == 'Mary');

// Numerical tests
let number1 = 10;

console.log("Is number == 10? I predict True.");
console.log(number1 == 10);

console.log("Is number != 5? I predict True.");
console.log(number1 != 5);

console.log("Is number > 5? I predict True.");
console.log(number1 > 5);

console.log("Is number < 20? I predict True.");
console.log(number1 < 20);

console.log("Is number >= 10? I predict True.");
console.log(number1 >= 10);

console.log("Is number <= 15? I predict True.");
console.log(number1 <= 15);

// Tests using "and" and "or" operators
let age2 = 25;

console.log("Is age > 18 and age < 30? I predict True.");
console.log(age2 > 18 && age < 30);

console.log("Is age < 20 or age > 30? I predict False.");
console.log(age2 < 20 || age > 30);

// Test whether an item is in an array
let fruits1 = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in fruits? I predict True.");
console.log(fruits1.includes('banana'));

console.log("Is 'grape' in fruits? I predict False.");
console.log(fruits1.includes('grape'));

// Test whether an item is not in an array
console.log("Is 'watermelon' not in fruits? I predict True.");
console.log(!fruits1.includes('watermelon'));

console.log("Is 'apple' not in fruits? I predict False.");
console.log(!fruits1.includes('apple'));

// question 25
let alien_color = 'green';

if (alien_color === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}

let alien_color1 = 'red';

if (alien_color1 === 'green') {
  console.log("Congratulations! You just earned 5 points.");
}
//QUESTION 26
let alienColor = "red";

if (alienColor === "green") {
  console.log("Player earned 5 points.");
} else if (alienColor === "yellow") {
  console.log("Player earned 10 points.");
} else if (alienColor === "red") {
  console.log("Player earned 15 points.");
} else {
  console.log("Unknown alien color.");
}
//questiom 27
let age1 = 25;

if (age1 < 2) {
  console.log("The person is a baby.");
} else if (age1 >= 2 && age1 < 4) {
  console.log("The person is a toddler.");
} else if (age1 >= 4 && age1 < 13) {
  console.log("The person is a kid.");
} else if (age1 >= 13 && age1 < 20) {
  console.log("The person is a teenager.");
} else if (age1 >= 20 && age1 < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
//question 28
let favorite_fruits = ["banana", "apple", "mango"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}

if (favorite_fruits.includes("mango")) {
  console.log("You really like mangoes!");
}

if (favorite_fruits.includes("orange")) {
  console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
  console.log("You really like grapes!");
}
//question 29
let usernames = ["admin", "Eric", "John", "Sarah", "David"]; // Array of usernames
for (let username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
//question 30
let usernames2 = []; // Empty array of usernames

if (usernames2.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let username of usernames2) {
    if (username === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}

// Remove all of the usernames from the array.
usernames = [];
// Check if the array is empty.
if (usernames.length === 0) {
  console.log("We need to find some users!");
} else {
  // The array is not empty, so this code will not be executed.
}
//question 31
let current_users = ["John", "Jane", "Mike", "Sarah", "Alex"]; // List of current usernames
let new_users = ["Mike", "Eric", "Alex", "Linda", "Sophie"];// List of new usernames
for (let new_username of new_users) {
  let isTaken = current_users.some((current_username) =>
    current_username.toLowerCase() === new_username.toLowerCase()
  );
  if (isTaken) {
    console.log(`Username '${new_username}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Username '${new_username}' is available.`);
  }
}
//question 32
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array of numbers

for (let number of numbers1) {
  let ordinalEnding

  if (number1 === 1) {
    ordinalEnding = "st";
  } else if (number1 === 2) {
    ordinalEnding = "nd";
  } else if (number1 === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  console.log(`${number}${ordinalEnding}`);
}
// question 33
let favoritePizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];

for (let pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// question34
let animals = ["Dog", "Cat", "Rabbit"];
for (let animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
// question 35

function make_shirt(size = "large", message= "I love TypeScript") {
  console.log(`The shirt size is ${size} and it has the message: ${message}`);
}

make_shirt(); // Default: large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, World!"); // Custom size and message
//question 36
function describe_city(city= "string", country= "string"   ) {
  console.log(`${city} is in ${country}.`);
}

// Calling the function for different cities
describe_city('Karachi', 'Pakistan'); // Karachi is in Pakistan
describe_city('Paris'); // Paris is in Unknown (default country)
describe_city('New York', 'USA'); // New York is in USA

//question37
function city_country(city= "string", country=" string") {
  return `${city}, ${country}`;
}

// Calling the function with different city-country pairs
let location1 = city_country('ISLAMABAD', 'Pakistan');
console.log(location1); // Lahore, Pakistan

let location2 = city_country('Paris', 'France');
console.log(location2); // Paris, France

let location3 = city_country('New York', 'USA');
console.log(location3); // New York, USA


// question 38

function make_album1(artist= "string", title= "string", tracks= "number"){
  let album = {
    artist: artist,
    title: title
  };

  if (tracks) {
    album['tracks'] = tracks;
  }

  return album;
}

let album1=   make_album1('Artist 1', 'Album 1');
console.log(album1);

let album2= make_album1('Artist 2', 'Album 2' );
console.log(album2);

let album3= make_album1('Artist 3', 'Album 3' );
console.log(album3);
// question 41
function show_magicians(magicians= "string"){
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Example usage
const magicians1= ["Harry Houdini", "Penn & Teller ", "David Copperfield"];
console.log(magicians1);
// question 42
function GreatMagicians(magicians) {

    
  for (var i = 0; i < magicians.length; i++) {
    magicians[i] = "the Great " + magicians[i];
  }
  return magicians; 
}


var magicians = ["David Copperfield", "David Blaine", "Criss Angel", "Lance Burton", "Doug Henning"];


var modifiedMagicians = GreatMagicians(magicians);

for (var magician of modifiedMagicians) {
  console.log(magician);
}
// question 43
function Sandwich(items) {
  console.log("Bread: ", items[0]);

  if (items.length > 1) {
    console.log("Ingredients: ", items.slice(1).join(", "));
  } else {
    console.log("No additional ingredients.");
  }


}
console.log("  ")
console.log("Sandwich Order:")
Sandwich(["Brown Bread", "Chicken", "Chadder Cheese", "Tomato","cucumber", "Mayonnaise"]);
console.log("  ")
// question 44
function sandwich(Sandwich) {
  console.log("Bread: ", Sandwich[0]);

  if (Sandwich.length > 1) {
    console.log("Ingredients: ", Sandwich.slice(1).join(", "));
  } else {
    console.log("No additional ingredients.");
  }
}

console.log("Sandwich Argument 1:");
sandwich(["Brown Bread", "Chicken", "Cheddar Cheese", "Tomato", "Cucumber", "Mayonnaise"]);

console.log("\nSandwich Argument 2:");
sandwich(["Wheat Bread", "Turkey", "Lettuce"]);

console.log("\nSandwich Argument 3:");
sandwich(["White Bread", "Ham"]);
// question 45
function StoreCarInfo(Manufacturer, Model, ...keyValuePairs) {
  var car = {
    Manufacturer: Manufacturer,
    Model: Model,
  };

  for (var i = 0; i < keyValuePairs.length; i++) {
    var [key, value] = keyValuePairs[i];
    car[key] = value;
  }

  return car;
}

function StoreInfo(car) {
  for (var key in car) {
    console.log(`${key}: ${car[key]}`);
  }
}

var carInfo = StoreCarInfo("Honda ", "Civic", ["ModelYear", 2023], ["Color", "Black"], ["Optional_Features", "Automatic door unlock system."]);

StoreInfo(carInfo);