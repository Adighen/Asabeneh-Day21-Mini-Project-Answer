const h1 = document.querySelector("h1")
const h2 = document.querySelector("h2")
const date = document.querySelector("p")
const lists = document.querySelectorAll("li")

h1.innerHTML = `Asabeneh Yetayeh challenges in <span id="year">2020</span>`
let year = document.querySelector("#year")
console.log(year.innerText)

const randomColor = () =>{
    let renk1 = Math.floor(Math.random()*255)
    let renk2 = Math.floor(Math.random()*255)
    let renk3 = Math.floor(Math.random()*255)
    color = `rgb(${renk1},${renk2},${renk3})`
    year.style.color = color
}
setInterval(randomColor,1000)

h2.style.textDecoration = "underline"

date.textContent = Date()
date.style.border = "solid"
date.style.width = "250px"
date.style.margin = "0 auto"

const randomColor2 = () =>{
    let renk1 = Math.floor(Math.random()*255)
    let renk2 = Math.floor(Math.random()*255)
    let renk3 = Math.floor(Math.random()*255)
    color = `rgb(${renk1},${renk2},${renk3})`
    date.style.backgroundColor = color
}

setInterval (randomColor2,1000)

lists.forEach((li)=>{
    li.style.listStyle ="none"
    li.style.border ="solid"
    li.style.borderColor = "white"
    li.style.margin = "0 auto"
    li.style.width= "650px"
    li.style.height = "40px"
    
    if(li.textContent.toLowerCase().includes("done")){
        li.style.backgroundColor = "green"
    }
    else if (li.textContent.toLowerCase().includes("ongoing")){
        li.style.backgroundColor="yellow"
    }
    else{
        li.style.backgroundColor="red"
    }
})

console.log(date.innerText)
