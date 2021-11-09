function betterThanAverage(classPoints, yourPoints) {

  var sum = 0;
  var avr = 0;
  classPoints.push(yourPoints);
  for (i=0; i < classPoints.length; i++){
   
    sum += classPoints[i];
    avr = sum/classPoints.length;
  }  
  return avr < yourPoints
}
