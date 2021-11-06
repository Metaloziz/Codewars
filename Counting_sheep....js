function countSheeps(arrayOfSheep) {
  let a = arrayOfSheep

  let sum = 0
  
  for (i=0; i < a.length; i++ ) {
    if (a[i]==true){
      sum++
    }
  }
  return sum
}
