//Palindrome
let word = prompt("Enter your word: ")
let reverse_word = "" 

for (let i = word.length; i>0, i--;) {
  reverse_word += word[i]
}

if (word == reverse_word) {
  console.log(word + " is a palindrome.") 
} else {
  console.log(word + " is not a palindrome.")
}


//Remove Duplicates
names = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
duplicates = []

function find_dupes() {
    for (let i = names.length; i>0, i--;) {
      
      if (duplicates.includes(names[i])) {
        continue
        
      } else {
        duplicates.push(names[i])
      }
  }
  console.log(duplicates)
}
find_dupes()


//True or False
namesList = ["John", "Mary", "Alex", "Steve"]

function in_Array() {
  
  userInput = prompt("Enter name: ")
      
  if (namesList.includes(userInput)) {
    console.log(userInput + " is already included.")
    return true
        
  } else {
    console.log(userInput + " is not included.")
    return false 
  }
      
}
in_Array()


//Largest Number in Array
numbers = [1, 3, 5, 700, 2, 35, 8, 202]

function high_number(){
  
  let highest_number = 0
  let counter = numbers.length
  
  while (counter > 0) {
    
    if (numbers[counter] > highest_number) {
      highest_number = numbers[counter]
    }
    
    counter--
    
  }
  console.log (highest_number)
}
high_number()


//Smallest Number in Array
numbers = [1, 3, 5, 700, -2, 35, 8, -202]

function lowest_number(){
  
  let lowest_number = 0
  let counter = numbers.length
  
  while (counter > 0) {
    
    if (numbers[counter] < lowest_number) {
      lowest_number = numbers[counter]
    }
    
    counter--
    
  }
  console.log (lowest_number)

}
lowest_number()


//Fizz Buzz
user_number = prompt("Enter Number: ")

function fizzBuzz() {
  
  if ((user_number % 5 === 0) && (user_number % 3 === 0)) {
    console.log("Fizz Buzz")
  
  } else if (user_number % 3 === 0) {
    console.log("Buzz")
  
  } else if (user_number % 5 === 0) {
    console.log("Fizz")
    
  } else {
    console.log("No Fizz, No Buzz")
  }
  
}
fizzBuzz()


//Even or Odd Number
user_number = prompt("Enter Number: ")

function evenOdd() {
  
  if (user_number % 2 === 0) {
    console.log("Even")
    
  } else {
    console.log("Odd")
  
  }
}
evenOdd()


//Ascending or Descending 


//Bank Program
class BankAccount {
  constructor(firstName, middleName, lastName, accountType, balance) {
      this.firstName = firstName
      this.lastName = lastName
      this.middleName = middleName
      this.accountType = accountType
      this.balance = balance
      this.state = status
  }

  openAccount() {
    userFirstName = prompt("First Name: ")
    UserMiddleName = prompt("Middle Name: ")
    userLastName = prompt("Last Name: ")
    account = prompt("Type of Account: ")
    initialDeposit = parseInt(prompt("Deposit amount: ")) 

    let bankAccount = new BankAccount (userFirstName, UserMiddleName, userLastName, account)
    console.log("The " + account + "account for " + userFirstName + UserMiddleName + userLastName + " has been created. The initial balance is " initialDeposit + ".")
  }

  transferFunds() {
    transferFrom = prompt("Transfer from: ")
    transferTo = prompt("Transfer to: ")
    transferAmount = parseInt(prompt("Transfer Amount: "))

    

    }


  }
  
  withdrawFunds() {
    withdrawFrom = prompt("Withdraw from: ")
    withdrawAmount = parseInt(prompt("Withdraw Amount: "))


  }
  
  closeAccount() {
    this.state = "closed"
  }

}


function accountActivity () {
  userOption = ("Open Account: Press 1; Transfer Funds: Press 2; Withdraw Funds: Press 3")

  if (userOption == "1") {
    BankAccount.openAccount()
  } else if (userOption == "2") {
    BankAccount.transferFunds()
  } else if (userOption == "3") {
    BankAccount.withdrawFunds()
  } else {
    console.log("Choose 1, 2 or 3")
  }
}

accountActivity ()
