var sub1=Number(prompt("Enter your First Number"));
var sub2=Number(prompt("Enter your second Number"));
var sub3=Number(prompt("Enter your Third Number"));

function sub(sub1=0,sub2=0,sub3=0){
    var sub=sub1-sub2-sub3
    alert(sub);
    alert("You just did Substraction");
}
sub(sub1,sub2,sub3);