const accountId = 145
let accountEmail = "royan@google.com"
var accountPass = "12345"

// prefer not to use var in js due to its issues in scope

accountCity = "Multan"
// accountId=145 not allowed to change the value of const
let accountState;

console.log(accountId)
console.table([accountId, accountEmail, accountPass, accountCity])