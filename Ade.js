// Create a bank ussd code using if statement

// Airtime Code

var initialBalance = 100000;

var ussd = prompt("Enter Ussd Code");
var bal = initialBalance - bank;

if (ussd == "*123#") {
  var entry = prompt(
    "Enter your Operation \n Press 1 to Buy Airtime \n Press 2 to Buy Data \n Press 3 to Transfer to Banks \n Press 4 to Check Balance \n Press 0 to Cancel Operation \n"
  );
  if (entry == 1) {
    var airtime = Number(prompt("Enter Airtime Amount"));
    if (airtime <= 10000) {
      var phone = prompt("Enter Your Phone Number");
      if (phone.length == 11) {
        alert(`${phone} has been credited with the sum of ${airtime}`);
        alert("Thanks for using this Channel");
      } else {
        alert("Incorrect Phone Number");
      }
    } else {
      alert("You Have Exceeded Your Daily Target");
    }
  }
} else {
  alert("Unknown Ussd code");
}

// Data Code

if (entry == 2) {
  var data = Number(prompt("Enter Data Amount"));
  if (data <= 10000) {
    var phone1 = prompt("Enter your Phone Number");
    if (phone1.length == 11) {
      alert(`${phone1} has been credited with the sum of ${data}MB`);
      alert("Thank You For Banking with us");
    } else {
      alert("Incorrect Phonne Number");
    }
  } else {
    alert("You Have Exceeded Your Daily Target");
  }
}

// Transfer to Banks Code

if (entry == 3) {
  var bank = Number(prompt("Enter Amount"));
  if (bank <= initialBalance) {
    var phone2 = prompt("Enter Account Number");
    if (phone2.length == 10) {
      var bank2 = prompt(
        "Enter Your Bank \n 1.Union \n 2.UBA \n 3.Acess \n 4.First \n 0.Next"
      );

      if (bank2 == 1 || bank2 == 2 || bank2 == 3 || bank2 == 4 || bank2 == 0) {
        if (bank2 == 1) {
          alert("Transaction Successful");
          alert("Thank You For Banking with us");
        } else if (bank2 == 2) {
          alert("Transaction Successful");
          alert("Thank You For Banking with us");
        } else if (bank2 == 3) {
          alert("Transaction Successful");
          alert("Thank You For Banking with us");
        } else if (bank2 == 4) {
          alert("Transaction Successful");
          alert("Thank You For Banking with us");
        }

        if (bank2 == 0) {
          var zero = prompt(
            "Others Banks\n 5.Fidelity\n 6.Sterling\n 7.Zenith\n 8.Eco"
          );
          if (zero == 5 || zero == 6 || zero == 7 || zero == 8) {
            alert("Transaction Successful");
            alert("Thank You For Banking with us");
          } else {
            alert("Enter one of the following banks to continue transaction");
          }
        }
      } else {
        alert(
          "Your Transaction Can not be Proceed Because You do not Choose Any of The Following Banks"
        );
      }
    } else {
      alert("Incorrect Account Number");
    }
  } else {
    alert("You have Exceeded Your initial Balance");
  }
}

// Code To Check Balance

if (entry == 4) {
  alert("Your Initial Balance is" + initialBalance);
}

// Code To Cancel Transaction

if (entry == 0) {
  alert("Ussd Closed");
}
