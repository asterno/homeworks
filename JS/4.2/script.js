
   


    



// fib(7)

function fib() {
    let x = +prompt("Число Фибооначчи")
    let a = 1
    let b = 1
    for (let i = 0; i < x; i++) {
      let c = a + b
      a = i - 1
      b = i - 2
   console.log(c)
    }

      
  }

  fib()