let getLoanAmount = document.getElementById("loanAmount")
let getLoanMonths = document.getElementById("loanMonths")
let getLoanMessage = document.getElementById("loanMessage")

let getInvestAmount = document.getElementById("investAmount")
let getInvestMonths = document.getElementById("investMonths")
let getInvestMessage = document.getElementById("investMessage")


function loanCalculator() {
    let amountValue = Number(getLoanAmount.value)
    let monthValue = Number(getLoanMonths.value)

    if (amountValue > 0 && monthValue > 0) {
        let interest = amountValue * 0.1 * monthValue       
        let totalRepayment = amountValue + interest
        let perMonth = totalRepayment / monthValue

        getLoanMessage.style.color = "black"
        getLoanMessage.textContent = `You are to repay ${totalRepayment.toLocaleString()} in ${monthValue} month(s), which is ${perMonth.toLocaleString()} per month`
    }
    else {
        getLoanMessage.style.color = "red"
        getLoanMessage.textContent = "PLEASE ENTER AN AMOUNT AND SELECT A DURATION"
    }
}


function investmentCalculator() {
    let amountValue = Number(getInvestAmount.value)
    let monthValue = Number(getInvestMonths.value)

    if (amountValue > 0 && monthValue > 0) {
        let profit = amountValue * 0.05 * monthValue        
        let totalReturn = amountValue + profit

        getInvestMessage.style.color = "black"
        getInvestMessage.textContent = `After ${monthValue} month(s) you will earn ${profit.toLocaleString()} profit, so you will get back ${totalReturn.toLocaleString()}`
    }
    else {
        getInvestMessage.style.color = "red"
        getInvestMessage.textContent = "PLEASE ENTER AN AMOUNT AND SELECT A DURATION"
    }
}