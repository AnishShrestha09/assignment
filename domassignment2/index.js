
// section 1
// question 1
const mph = document.querySelector("#btn")
const mph2 = document.querySelector("#mph2")

mph.addEventListener("click",()=>{
    mph2.textContent = "button clicked";
})


// question 2
const btn3 = document.querySelector("#btn2")
const mph3 = document.querySelector("#mph3")


btn3.addEventListener("click",()=>{
    mph3.textContent = "❤️❤️❤️";
})

// question 3
const meprh = document.querySelector("#meprh")

meprh.addEventListener('mouseover',()=>{
    meprh.textContent= "mph"
})


// section 2
// question 5
const hello = document.querySelector("#hello")

meprh.addEventListener('mousemove',(e)=>{
   hello.textContent= `${e.clientX},${e.clientY}`
})

// const form = document.querySelector("#form")
const namee = document.querySelector("#namee")
const meprh1 = document.querySelector("#meprh1")

// question 6
namee.addEventListener('input',(e)=>{
    const name = e.target.value
    meprh1.textContent= name
})




// removing and controlling events

const hello1 = document.querySelector("#hello1");

function listen() {
    hello1.textContent = "pharivansh";
}

const add = document.querySelector("#add");

add.addEventListener("click", listen);

const removebtn = document.querySelector("#remove");

removebtn.addEventListener("click", function() {
    add.removeEventListener("click", listen);
});

let i = 1000000
const helll = document.querySelector("#helll");
helll.addEventListener('click',function (){
    // let num = i++;
    meprh1.textContent= i + 1
} ,{once:true}
    
)


const parent = document.querySelector("#parent");
const click = document.querySelector("#click");


parent.addEventListener('click',function (e){
    // let num = i++;

    meprh1.textContent=" parent is clicked"
} )


click.addEventListener('click',function (e){
    // let num = i++;
    meprh.textContent=" child is clicked"
    e.stopPropagation()
} )