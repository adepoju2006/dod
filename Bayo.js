var istrue = true;
var random = Math.floor(Math.random() * 10 + 1);
console.log(random);

while (istrue) {
  var entry = prompt("Enter your lucky number");
  if (entry == random) {
    alert("That is correct!");
    istrue = false;
  } else {
    alert("Incorrect Entry");
    istrue = true;
  }
}
