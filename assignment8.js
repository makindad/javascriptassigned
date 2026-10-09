let firstNumber = Number(prompt('what is your first number?'))
let secondNumber = Number(prompt('what is your second number?'))

function addition() {

    let sum = firstNumber + secondNumber

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('you don\'t have a valid number')
    }
    else{
        console.log(`the sum of ${firstNumber} and ${secondNumber} is ${sum}`)
    }
}

addition()

function subtraction() {

    let sub = firstNumber - secondNumber

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('you don\'t have a valid number')
    }
    else{
        console.log(`the subtraction of ${firstNumber} and ${secondNumber} is ${sub}`)
    }
}

subtraction()

function division() {

    let div = firstNumber / secondNumber

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('you don\'t have a valid number')
    }
    else{
        console.log(`the division of ${firstNumber} and ${secondNumber} is ${div}`)
    }
}

division()

function multiplication() {

    let mul = firstNumber * secondNumber

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        console.log('you don\'t have a valid number')
    }
    else{
        console.log(`the division of ${firstNumber} and ${secondNumber} is ${mul}`)
    }
}

division()