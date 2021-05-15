var sub1=Number(prompt("Enter your First Number"));
var sub2=Number(prompt("Enter your second Number"));
var sub3=Number(prompt("Enter your Third Number"));

function multi(sub1=0,sub2=0,sub3=1){
    var multi=sub1*sub2*sub3
    alert(multi);
    alert("You just did Multiplication");
}
multi(sub1,sub2,sub3);