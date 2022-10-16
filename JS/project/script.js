const list =[

    
]

const add = document.querySelector('.button')
const input = document.querySelector('.input')
let test = 'ggggg'

console.log(typeof test)

console.log( typeof input.textContent)

function changed(id) {
    const item = list.findIndex(t => t.id === id)
    newtodo = prompt('Change')
list[item].text = newtodo
render()
}



function render(){

const main = document.createElement('div')
main.setAttribute('class','list')

for (let i = 0; i < list.length;i++) {
    const div = document.createElement('p')
    div.setAttribute('class','todo')


    function deltodo(id) {
        const item = list.findIndex(t => t.id === id)
  div.remove()
    render()
    }




    const p = document.createElement('p')

    p.textContent = list[i].text
div.append(p)

const buttons = document.createElement('div')
buttons.setAttribute('class','actions')

const change = document.createElement('button')
change.setAttribute('class','change')


change.textContent = 'Изменить'



//  change.onclick = (event) => {
//      event.preventDefault()
//      let newtodo = prompt('Change')

//      p.textContent= newtodo
//  }

change.onclick =(event) => {
    event.preventDefault()
     changed(list[i].id)
  
}
const del = document.createElement('button')
del.setAttribute('class','delete')

del.textContent = 'Удалить'
// del.onclick = (event) => {
//     event.preventDefault()
// del.remove()
// }

buttons.append(change,del)


div.append(buttons)

main.append(div) 
const form = document.querySelector('.form')

document.querySelector('.list').remove()

form.append(main)
input.value = " "
add.addEventListener('click',change)



del.onclick = (event) => {
    event.preventDefault()

    deltodo(div[i].id)

}



}


}

function handle (event) {
    event.preventDefault()

    let obj = {
        id: list.length + 1,
        text: input.value
    }

// list.length = 0
    list.push(obj)
    console.log(list)

let min = 'gggg'
let max = 'gggggggggggggggggggggggggggggggggggggggggggggggggg'
if(input.value.length < min.length ){
    alert('мало')
      input.value = " "
    list.length = 0
  
}else if(input.value.length > max.length) {
alert("много")
input.value = " "
list.length = 0


} else {
    render()
}
 



}


add.addEventListener('click',handle)



