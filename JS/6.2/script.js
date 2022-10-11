let block = document.querySelector('div')
let button = document.querySelector('button')


function on(){
    block.style.backgroundColor = 'green'
}

function off(){
    block.style.backgroundColor = 'black'
}
 if( block.style.backgroundColor =='green') {
    button.addEventListener('click',off)
}
 
if(block.style.backgroundColor == 'black'){
    button.addEventListener('click',on)
 
}
 