function findShort(s){
  
  let a = s.split(' ')
  
  let exp = a[0]
  
  for (let i = 1; i < a.length; i++){
    exp = a[i].length < exp.length ? a[i] : exp;
  }
  
  return exp.length
