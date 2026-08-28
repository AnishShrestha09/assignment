// array of fruits(section1)

const fruits = ["guava", "mango", "orange", "pineapple", "banana"];

// 2
const languages = ["Html", "cSS"];
languages.push("javascript");
console.log(languages);

// 3

languages.pop();

// 4
const colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);

// 5
colors.unshift("orange");
console.log(colors);

//push multiple elements
languages.push("react", "tyoescript");
console.log(languages);

// section 2

//remove a element using splice

languages.splice(1, 1);
console.log(languages);

//add the element using splice

languages.splice(1, 0, "CSS");
console.log(languages);

//replace the element using splice
languages.splice(3, 1, "Typescript");
console.log(languages);

// extract the part of an array
const language = languages.slice(1, 3);
console.log(language);

// section 3 (searching in arrays)

// find the indexof element

console.log(language.indexOf("CSS"));

// find
let orange = colors.find((value) => value == "orange");
console.log(orange);

// find an object using find
const users = [
  { name: "anish", age: 20 },
  { name: "pranish", age: 20 },
];

const name = users.find((value) => value["name"] == "anish");
console.log(name);

//find the index of rahul

const users2 = [
  { name: "rahul", age: 20 },
  { name: "priya", age: 30 },
];

let index = users2.findIndex((value) => value.name == "rahul");
console.log(index);

// section 4

// flatten the nested array

let array3 = [1, 2, 3, [4, 5]];

let array4 = array3.flat();
console.log(array4);


let array5 = [1, 2, 3, [4, [5,6]]];
let array6 =array5.flat(Infinity)
console.log(array6);


// display element using for each
array4.forEach(element => {
    console.log(element);
});


for(i=0;i<colors.length;i++){
    console.log(`${i},${colors[i]}`);
}


//update the array using multiple methods

colors.push("yellow")
colors.shift()
console.log(colors);
