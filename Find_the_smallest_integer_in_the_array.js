class SmallestIntegerFinder {
  findSmallestInt(args) {

var a = args[0];
                for (let i = 0; i < args.length; i++) {
                    if (args[i] < a) {
                        a = args[i]
                    }     
                }return a;
  }
}
