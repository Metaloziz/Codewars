function correct(string){
  let a = string.split('')
  for (let i = 0; i < string.length; i++ ) {  
   a[i] === '5' ? a[i] = 'S' : a[i] === '0' ? a[i] = 'O' : a[i] === '1' ? a[i] = 'I' :''  
 
  }
//correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
