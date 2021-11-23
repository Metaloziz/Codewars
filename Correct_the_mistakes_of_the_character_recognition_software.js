function correct(string){
  let a = string.split('')
  for (let i = 0; i < string.length; i++ ) {  
   a[i] === '5' ? a[i] = 'S' : a[i] === '0' ? a[i] = 'O' : a[i] === '1' ? a[i] = 'I' :''  
 
  }
