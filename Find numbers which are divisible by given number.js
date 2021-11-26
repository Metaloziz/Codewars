function divisibleBy(numbers, divisor){

  let arr = numbers.filter (x => x%divisor === 0 )
  return arr
  
}
