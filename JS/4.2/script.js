
function fib() {
    let x = +prompt("Число Фибооначчи")
    let v = 1
    let n = 1
    for (let i = 0; i < x; i++) {
      let c = v + n
     v = n
     n = c
   console.log(c)
    }

      
  }

  fib()