let arr = [23,12,1,3,22,17]




arr.sort( (x,y) => {
 if(x > y) 
  {return 1}
if(x == y)
  {return 0}
if(x < y) 
  {return -1}
 }
)
console.log(arr)
