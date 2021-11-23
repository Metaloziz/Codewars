function fakeBin(x){
  x.split('')
  let y = ''
  for (let i = 0 ; i < x.length; i++){
    
    x[i] < 5 ? y += '0' : y += '1'   
  } 
  return y
}
  
//   function fakeBin(x) {
//     return x.split('').map(n => n < 5 ? 0 : 1).join('');  wow
// }
 
