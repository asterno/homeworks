

     let block = document.querySelector('div')
 let button = document.querySelector('button')

    function on(){
    block.style.backgroundColor = 'green'
    function off(){
        block.style.backgroundColor = 'black'
   
    }
    button.addEventListener('click',off)
    
}



button.addEventListener('click',on)
