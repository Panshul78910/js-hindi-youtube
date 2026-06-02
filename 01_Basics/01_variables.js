const accountId = 144553
let accountEmail = "panshulaisc@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2

accountEmail = "iqbal.com"
accountPassword = "2947294729"
accountCity = "Kolkata"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword, accountCity])



