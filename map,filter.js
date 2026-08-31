// section 1
// question 1
const devices = ["laptop", "mobile", "headphones"];

const upperdevices = devices.map((device) => device.toUpperCase());

console.log(upperdevices);

// add a currency symbol to prices

const money = [100, 200, 300];

const ruppess = money.map((value) => `$ ${value}`);
console.log(ruppess);

// extract user names

const obj1 = [
  {
    name: "anish",
    roll: 12,
  },
  {
    name: "manish",
    roll: 12,
  },
];

const names = obj1.map((value) => value.name);

console.log(names);

// add 10% gst

const ruppeees = money.map((value) => value + 0.1 * value);
console.log(ruppeees);

// update the object data immutabililty

const updated = obj1.map((value) => {
  return { ...value, roll: 13 };
});

console.log(updated);

// add new property using map

const updatedd = updated.map((value) => {
  return {
    ...value,
    present: "true",
  };
});

console.log(updatedd);

// section 2
//  display using for each and map

const language = ["html", "css", "Js"];

language.forEach((element) => {
  console.log(element);
});

// create a new array using map

const LANGUAGES = language.map((value) => value.toUpperCase());

console.log(LANGUAGES);

const use = ["rahul", "anish", "shyamashyam"];
const users = use.map((value) => `user ${value}`);
console.log(users);

// section 3

// filter available products

const products = [
  {
    name: "anish",
    roll: 12,
    available: true,
    price: 10000,
    email: "anishgmail.com",
    quantity:1
  },
  {
    name: "manish",
    roll: 15,
    available: false,
    price: 100000,
    email: "anish@yahoo.com",
    quantity:1
  },
  {
    name: "manish",
    roll: 15,
    available: false,
    price: 100000,
    email: "anish@gmail.com",
    quantity:1
  },
];

const availableonly = products.filter((product) => product.available);

console.log(availableonly);
console.log("five");
const fivetten = products.filter((product) => product.roll == 15);
console.log(fivetten);

const expensive = products.filter((product) => product.price >= 100000);
console.log(expensive);


const rightgmail = products.filter((product) => product["email"].includes('@gmail'));
console.log(rightgmail);

// section 4~

const total = products.reduce((value,total)=>{
  return total+value.quantity
 },0)
 
console.log(total);

// total quantity of all products 
const total1 = products.reduce((total, value)=>{
  total =value["quantity"] +total
  return total;
},0)


console.log(total1)


// count total products

let products1 = ['laptop', 'computer', 'desktop']

const quantity1 = products1.reduce((first)=> {
  first =  first+1;
  return first;
},0)

console.log(quantity1)

// count the total price 

const totalPrice = products.reduce((total,product)=>{
  total = product.price +total;
  return total;
},0)
console.log("totalprice")

console.log(totalPrice)


// create a comma seperated string
const p = products1.reduce((price, products)=>{
  price+=`${products},`
  return price
},"")

console.log(p)

