function findDifference(a, b) {
  
  let c = 1
  let d = 1
  
  for (i=0; i < 3; i++) {
  c*= a[i]
  d*= b[i]
}
   return Math.abs(c-d)
}
