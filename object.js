// 1. Create a User Object
// Create an object named user containing the properties name, email, and role. Display the complete
// object.
// Example:
// Output:
// {
//  name: "Rahul",
//  email: "rahul@example.com",
//  role: "developer"
// }

const User = {
  name: "Rahul",
  email: "rahul@example.com",
  role: "developer",
};

const product = {
  name: "Laptop",
  price: 50000,
  category: "Electronics",
};

console.log(product.name);
console.log(product.price);

const user = {
  name: "Rahul",
  email: "rahul@example.com",
};

console.log(user["name"]);
console.log(user["email"]);

const key = "name";
console.log(user[key]);

User["role"] = "developer";

console.log(User);

user["isLoggedIn"] = true;

console.log(user);

// section 2
// 8
console.log("section2");
console.log(Object.keys(user));

// 9
console.log(Object.values(user));

// 10
console.log(Object.entries(user));

// section3 destructuring

console.log("section3");

let {name } = product;

console.log(name);

// destructure with renaming
let { name: sanukoname, email2 } = user;

console.log(sanukoname);


const nn ="anish";
const ag = 12;

const user3= {
    name:nn,
    age : ag
}

console.log(user3);

//destructure with function parameters


function displayuser({name,price,category}) {
    console.log(`${name},${price},${category}`);
}


displayuser(product)


// section 4

console.log("section4");
const newUser = {...User}
console.log(newUser);

// console.log(16);


const newUser2 = {...User,email:"rahul@100.com"}
console.log(newUser2);


// question 17

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];


const both = [...frontend,...backend]

console.log(both);




function displaySkills(name,...skills){
    console.log(`${name},skills are :${skills}`);
}


displaySkills('Rahul','HTML', 'CSS', 'JavaScript', 'Node.js', 'Express')

