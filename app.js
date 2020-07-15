var name = "Josh";
console.log(name);

var myLocation = "Los Angeles";
console.log(myLocation);

var favoriteNumber = 5;
console.log(favoriteNumber);

var teams = ["Rockets", "Lakers", "Warriors", "Clippers", "Blazers", "Celtics", "Nets"];

var number = 10;
var otherNumber = 1;

while (otherNumber < number)
{
    console.log(number);
    otherNumber++;
}

var numberTwo = 20;
var myOtherNumber = 10;

while(myOtherNumber < numberTwo)
{
    console.log(myOtherNumber);
    myOtherNumber += 1;
}

var joshFav = 5;
var toHundred = 100;

while (joshFav < toHundred)
{
    console.log(joshFav);
    joshFav++;
}

for (var i = 0; i < 10; i++)
{
    console.log(i);
}

for (var i = 0; i < teams.length; i++)
{
    console.log(teams[i]);
}

var potatoes = ["idaho", "sweet", "baked", "mashed", "boiled"];
for (var i = 0; i < potatoes.length; i++)
{
    console.log(potatoes[i]);
}

const cars = ["Tesla", "Honda", "Toyota", "Ford"];
console.log(cars);
for (let i = 0; i < cars.length; i++)
{
    let eachCar = cars[i];
    console.log(eachCar);
}

// OBJECTS
const josh = 
{
    fullName: "Joshua Chiang",
    age: 22,
    myLocation: "Los Angeles",
    placesTraveled: ["Taiwan", "Hungary", "Spain", "Oregon", "Arizona", "Nevada", "New York"]
};

console.log(josh);

console.log(josh.placesTraveled[4]);

const myCoolPost = 
{
    username: "@imjoshchiang",
    likes: 42,
    comments: ["really cool", "yeah josh, yeah?", "cool beans bro!"],
    caption:  "look at these beans bro",
    picture: "https://instagram.com/imjoshchiang/...",
    shares: 12
}

console.log(myCoolPost);

myCoolPost.location = "San Jose";
console.log(myCoolPost);

const anOkayPost =
{
    username: "@potato-man",
    likes: 24,
    comments: ["that's not a potato", "what kind of potato is that?", "i want that potato"],
    caption: "look at this potato",
    picture: "https://instagram.com/potato-man/...",
    shares: 2
}

console.log(anOkayPost);

const julyFourthPost =
{
    username: "@joe"
}

julyFourthPost.picture = "https://instagram.com/joe/...";
julyFourthPost["likes"] = 45;
julyFourthPost.comments = ["that's wack bro", "okaaaay"];
julyFourthPost.shares = 10;
julyFourthPost.caption = "QWODfhqwodfih";


// FUNCTIONS
console.log("Hello");

//standard
function sayHello()
{
    console.log("Hello");
}

sayHello();
sayHello();
sayHello();

//function expression
const sayHelloAgain = function()
{
    console.log("Hello Again");
}

sayHelloAgain();

//arrow function
const sayHelloFinal = () =>
{
    console.log("Hello for the last time");
}

sayHelloFinal();


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const otherNumbers = [11, 22, 33, 44, 50, 55, 66, 77, 88, 99];

function printNumbers(nums)
{
    console.log(nums);
}

printNumbers(numbers);
printNumbers(otherNumbers);

function printNumsSeparate(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let num = array[i];
        console.log(num);
    }
}

printNumsSeparate(numbers);
printNumsSeparate(otherNumbers);

function lessThanFifty(array)
{
    for (let i = 0; i < array.length; i++)
    {
        let num = array[i];
        if (num < 50)
        {
            console.log("This number is less than fifty: " + num);
        }
        else if (num == 50)
        {
            console.log("This number is fifty: " + num);
        }
        else 
        {
            console.log("This number is greater than fifty: " + num);
        }
    }
}

lessThanFifty(otherNumbers);

function addNums(array)
{
    let result = 0;

    for (let i = 0; i < array.length; i++)
    {
        result += array[i];
    }
    
    return result;
}

console.log(addNums(otherNumbers));

let myResult = addNums(numbers);
console.log(myResult);
