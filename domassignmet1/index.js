// question 1
const hello= document.getElementById("title")

// question 2/
const hlo = document.querySelector("#description")

const hlo1 = document.querySelectorAll(".list1")

// question 3
hlo1.forEach(function(item){
    item.style.color = "red";
})

//question 4

const message = document.querySelector("#message")
message.textContent = "hello dosto"

// question 5
const mph = document.querySelector("#mph")
mph.innerHTML = "<h2>mph</h2>";


// section 2
//question 6
const mph2 = document.querySelector("#mph2")
mph2.setAttribute("alt","mph")

// question 7
message.classList.add("bgred")

// ques 8
const heading = document.querySelector("#heading")

heading.style.color = "white"
heading.style.backgroundColor = "red"
heading.style.fontSize = "40px"

// read data using data set


const btn1 = document.querySelector("#btn1")

heading.textContent = btn1.dataset.id;


// section 3
// create  and adding element

const p1 = document.createElement("p")
p1.innerHTML = "<h2>mph</h2>";
document.body.append(p1)


// prepend
const p2 = document.createElement("p")

p2.innerHTML = "<h2>mph</h2>";
document.body.prepend(p2)

// insertbefore
const inser = document.querySelector(".inser")

const list0 = document.createElement("li")
list0.textContent = "mph9"
inser.insertBefore(list0,inser.children[0])

// section 4

const mph0= document.querySelector("#mph0")
mph0.remove()
const inert = document.querySelector(".inser")
const mph00 = document.querySelector("#mph00")
inert.removeChild(mph00)

// const list0 = document.createElement("button")

const copy = btn1.cloneNode(true)

document.body.append(copy)