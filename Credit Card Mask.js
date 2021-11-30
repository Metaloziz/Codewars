function maskify(cc) {
  
  if (cc.length > 4){
    let strEnd = cc.slice(cc.length-4)
    let strStart = ''
    
    for (let i = 0; i < cc.length-4; i++) {
    strStart+='#'
      
  } return strStart+strEnd
  } return cc
}
