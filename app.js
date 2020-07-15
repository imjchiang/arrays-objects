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