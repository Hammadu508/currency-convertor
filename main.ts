#! /usr/bin/env node
import inquirer from "inquirer"
const Currency :any = {
    USD : 1,
    EUR : 0.9384,
    INR : 83.534548,
    GBP : 0.80,
    PKR : 278.016263,
}
let userAnswere = await inquirer.prompt(
  [ 
    {
        name:"from",
        message:"Enter from Currency",
        type:"list",
        choices:["USD","INR","PKR","EUR","GBP"] 
    },
    {
        name:"To",
        message:"Enter from Currency",
        type:"list",
        choices:["USD","INR","PKR","EUR","GBP"] 
    },
    {
        name:"Amount",
        type:"Number",
        message:"Enter your Amount"
    }
  ]
)
let fromAmount = Currency [userAnswere.from]
                           //USD
let toAmont = Currency [userAnswere.To]
let Amount = userAnswere.Amount
let baseAmount = Amount / fromAmount
let convertedAmount = baseAmount * toAmont
console.log(convertedAmount);

