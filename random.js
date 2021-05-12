var isTrue = true;
var random = Math.floor((Math.random() * 10)+1);
console.log(random);

while(isTrue) {
    var entry = prompt("Enter your lucky number");
    if(entry == random) {
        alert("That is correct!")
        isTrue = false;
    } else {
        alert("Incorrect entry");
        isTrue = true;
    }
}