function findNeedle(haystack) {
 
  let i = -1
  do {
    i ++
  } while (haystack[i] !=='needle')
  
  return 'found the needle at position '+ i
}
