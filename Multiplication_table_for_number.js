function multiTable(number) {
var a = []
for (i=1; i <= 10; i++) {
    a.push (i + " * " + number + " = " + i * number)
}
return a.join("\n")
}
