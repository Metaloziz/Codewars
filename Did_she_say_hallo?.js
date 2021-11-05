function validateHello(greetings) {
  let res =  /(hello|ciao|salut|hallo|hola|ahoj|czesc)/i;
  return res.test(greetings);
}
