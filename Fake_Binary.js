function fakeBin(x){
  x.split('')
  let y = ''
  for (let i = 0 ; i < x.length; i++){
    
    x[i] < 5 ? y += '0' : y += '1'   
  } 
  return y
