function getAverage(marks){
  var sum = 0
  var legth = marks.length

  for (i = 0; i < marks.length; i++) {               
                sum += marks[i]              
                var avg = Math.trunc(sum/legth)    
            }
return avg          
}
