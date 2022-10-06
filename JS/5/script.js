

let button = document.querySelector("#button")
let input = document.querySelector("#input")

function addHandler() {
let tag = document.createElement('div')

tag.setAttribute('class', 'block')

tag.innerText = input.value;

document.body.append(tag)
input.value = " "

let delbutton = document.createElement('button')
delbutton.innerText = 'Delete'

delbutton.onclick = () =>{
    tag.remove()
}

tag.append(delbutton)
}

button.addEventListener('click', addHandler)