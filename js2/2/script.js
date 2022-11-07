
let block = document.querySelector('.block')

 let position = 0
 let topPosition = 0
let rigth = 300
let bottom = 400
let moveBlock = () => {

if(position <= 300) {
    position += 16
block.style.left = `${position}px`
setTimeout(moveBlock,50)
} else if(position >=300 && topPosition <= 400 ){
  topPosition += 16
  block.style.top =`${topPosition}px`
  setTimeout(moveBlock, 50);
  }
  else if(rigth >=10 && topPosition >=400  ){
rigth -= 16
    block.style.left=`${rigth}px`
    setTimeout(moveBlock, 50);
    }
    else if(bottom >=10 && rigth <=10  ){
      bottom-= 16
          block.style.top=`${bottom}px`
          setTimeout(moveBlock, 50);
          }
  }

moveBlock()

let startt = document.querySelector('.start')
let stopp = document.querySelector('.stop')

function timer(){
let a =0
    let startf = setInterval(() => 
  {
a++
console.log(a)
},1000)

function stopf(){
  clearInterval(startf)
 
}


 stopp.addEventListener('click',stopf)
}


startt.addEventListener('click',timer)


let one = (x) => {
 return function two(y){
  let z = x * y
  console.log(z)
}
two()
}

let c = one(+prompt('Число 1'))

c(+prompt('Число 2'))



