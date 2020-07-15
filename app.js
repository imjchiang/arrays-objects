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
    username: "potato-man",
    likes: 24,
    comments: ["that's not a potato", "what kind of potato is that?", "i want that potato"],
    caption: "look at this potato",
    picture: "https://instagram.com/potato-man/...",
    shares: 2
}

console.log(anOkayPost);
