function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var a = [];
  for (i=0; i < birds.length; i++) {
    switch (birds[i]) {
            case geese[0]:
        break
            case geese[1]:
        break
            case geese[2]:
        break
            case geese[3]:
        break
            case geese[4]:
        break
        default: a.push(birds[i])
    }
  }
  return a
};
