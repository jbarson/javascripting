//In that file, define a variable named pets that references this array:

var pets = ['cat', 'dog', 'rat'];

//Create a for loop that changes each string in the array so that they are plural.

//You will use a statement like this inside the for loop:
for (var i in pets){
    pets[i] = pets[i] + 's';
};

//After the for loop, use console.log() to print the pets array to the terminal.
console.log(pets)