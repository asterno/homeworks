const list =[

    
]

const add = document.querySelector('.button')
const input = document.querySelector('.input')

function render(){

const main = document.createElement('div')
main.setAttribute('class','list')

for (let i = 0; i < list.length;i++) {
    const div = document.createElement('p')
    div.setAttribute('class','todo')

    const p = document.createElement('p')

    p.textContent = list[i].text
div.append(p)

const buttons = document.createElement('div')
buttons.setAttribute('class','actions')

const change = document.createElement('button')
change.setAttribute('class','change')

change.textContent = 'Изменить'
const del = document.createElement('button')
del.setAttribute('class','delete')

del.textContent = 'Удалить'
buttons.append(change,del)
div.append(buttons)

main.append(div) 
const form = document.querySelector('.form')

form.append(main)
input.value = " "
}}

function handle (event){
    event.preventDefault()

    let obj = {
        id: list.length + 1,
        text: input.value
    }
   
list.length = 0
    list.push(obj)
    console.log(list)
    render()
}
add.addEventListener('click',handle)

