const reverseSeq = n => {
  var a = [];
  var i = 1;
  while (i <= n){
  a.unshift(i);
  i++
}
  return a;
};
