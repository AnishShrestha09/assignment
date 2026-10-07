console.log("hello world")

const formm = document.querySelector("#formm")
const name1 = document.querySelector("#name")
const student = document.querySelector("#students")

const username = document.querySelector("#username")

formm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username1 = username.value;
    const onestudent = document.createElement('div')
    onestudent.classList.add("onestudent")
    onestudent.innerHTML = `
            <p>${username1}</p>
            <button class="delete">delete</button>
            `
    student.append(onestudent);

})


student.addEventListener('click',(e)=>{

    if(e.target.tagName ==="BUTTON"){
        e.target.closest(".onestudent").remove()
    }
    
})