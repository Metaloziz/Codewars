var number=function(array){
 
  let newArr =[]
  let num = 1
  
  if (array.length == 0) {
    return array
  } else {
    
    for (let i = 0; i < array.length; i++){
      newArr.push(''+num+': '+array[i])
      num++
    }
    return newArr
  }
