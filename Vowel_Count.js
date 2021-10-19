function getCount(str) {
  var vowelsCount = 0;
  
  for (i=0; i < str.length; i++){
        
      switch (str[i]){
      // «A», «E», «I», «O», «U»
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
           vowelsCount ++;
}
}
  return vowelsCount;
}
