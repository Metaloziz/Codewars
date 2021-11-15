function findMultiples(integer, limit) {
  
  let a = []
  let b = integer
  
  while (b<=limit) {
    a.push(b)
    b+=integer
  }
  
