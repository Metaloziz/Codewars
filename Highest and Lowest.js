function highAndLow(numbers) {
  let num = numbers.split(' ');
  let sorted = num.sort(function (a, b) {
    return Number(a) - Number(b);
  });
  return  sorted[sorted.length - 1] + " " +  sorted[0] ;
}
