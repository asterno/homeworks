let blue = document.querySelector('.blue')
let red = document.querySelector('.red')
  blue.style.backgroundColor =  'blue'
function change(){
    blue.style.backgroundColor =  'green'
  
}
function change1(){
    red.style.backgroundColor = 'black'
}
red.addEventListener('click',change)
blue.addEventListener('click',change1)