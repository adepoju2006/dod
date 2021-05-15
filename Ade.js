// Create a bank ussd code using if statement

// Airtime Code

var initialBalance = 100000;
var ini = 100000;

var ussd = prompt("Enter Ussd Code");
var bal = initialBalance - bank;

if (ussd == "*141#" || ussd == "*123" || ussd == "*121") {
  if (ussd == "*141#")
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
}
// else {
//   alert("Unknown Ussd code");
// }

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
          alert(
            "Transaction of" +
              " " +
              bank +
              " " +
              "was Successful your new Balance is" +
              " " +
              (initialBalance - bank)
          );
          alert("Thank You For Banking with us");
        } else if (bank2 == 2) {
          alert(
            "Transaction of" +
              " " +
              bank +
              " " +
              "was Successful your new Balance is" +
              " " +
              (initialBalance - bank)
          );
          alert("Thank You For Banking with us");
        } else if (bank2 == 3) {
          alert(
            "Transaction of" +
              " " +
              bank +
              " " +
              "was Successful your new Balance is" +
              " " +
              (initialBalance - bank)
          );
          alert("Thank You For Banking with us");
        } else if (bank2 == 4) {
          alert(
            "Transaction of" +
              " " +
              bank +
              " " +
              "was Successful your new Balance is" +
              " " +
              (initialBalance - bank)
          );
          alert("Thank You For Banking with us");
        }

        if (bank2 == 0) {
          var zero = prompt(
            "Others Banks\n 5.Fidelity\n 6.Sterling\n 7.Zenith\n 8.Eco"
          );
          if (zero == 5 || zero == 6 || zero == 7 || zero == 8) {
            alert(
              "Transaction of" +
                " " +
                bank +
                " " +
                "Was Successful your new Balance is" +
                " " +
                (initialBalance - bank)
            );
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

// Code for *123#

if (ussd == "*123#") {
  alert("Main Bal:" + initialBalance);
}
// else {
//   alert("IInvalid Service Code");
// }

// Code for *121#

if (ussd == "*121#") {
  var entry1 = prompt(
    "Information \n 1. NIN Capture \n 2. Buy Bundles & Service \n "
  );
  if (entry1 == 1) {
    var nin = prompt(
      "Please Enter your Government approved 11 digit NIN Number"
    );
    if (nin.length == 11) {
      alert("Thanks for providing Your NIN Number");
    } else {
      alert("Incorrect NIN Number");
    }
  }
  // } else {
  //   alert("Ussd Closed");
}

// Code for Num 2

if (entry1 == 2) {
  var extra = prompt(
    "Information \n 1. Data-Only Plans \n 2. Voice-Only Plans \n "
  );
  if (extra == 1) {
    alert("You will be Redirected to Data-only Plans Menu");
    var extra1 = prompt("Information \n 1. My Offer \n ");
    if (extra1 == 1) {
      var extra2 = prompt(
        "Information \n 1.Daily Plan 50MB / 100MB \n 2.Weekly Plan 500MB / 1GB \n 3. Monthly Plan 4G / 7G \n "
      );
      if (extra2 == 1) {
        alert("Your Daily Plan was Successful");
      } else if (extra2 == 2) {
        alert("Your Weekl Plan was successfull");
      } else if (extra2 == 3) {
        alert("Your Monthly Plan was successfull");
      }
    }
  }
  //  else {
  //   alert("Invalid Selection");
  // }
}

// if (extra == 2) {
// } else {
//   alert("Invalid Selection");
// }
// else {
//   alert("Invalid Selection");
// }

// Code for num 3
if (extra == 2) {
  alert("You will be redirected to Voice-Only Plan");
  var extra22 = prompt("Information \n 1. Buy Talkmore");
  if (extra22 == 1) {
    var talk = prompt(
      "Talkmore 5X (30days) \n 1. N100 gives N500 \n 2. N200 gives N1000 \n 3. N300 gives N1500 \n 4. N500 gives N2500 \n 5. N1000 gives N5000"
    );
    if (talk == 1) {
      alert("Your talkmore of N100 was successful");
      //else {
      // alert("Your selection is invalid");
      // }
    } else if (talk == 2) {
      alert("Your talkmore of N200 was successful");
    } else if (talk == 3) {
      alert("Your talkmore of N300 was successful");
    } else if (talk == 4) {
      alert("Your talkmore of N500 was successful");
    } else if (talk == 5) {
      alert("Your talkmore of N1000 was successful");
    } else {
      alert("Invalid Selection");
    }
  }
  // else {
  //   alert("Invalid Selection");
  // }
  //
}
// else "Invalid Selection";
// else {
//   alert("Invalid Selection");
// }
