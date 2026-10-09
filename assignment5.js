const grade = Number(prompt('What is your Mak'))

if(grade >= 80 && grade <= 100){
 console.log('Your Grade is A')

}

else if(grade >= 70 && grade <= 79){
 console.log('Your Grade is B')

}
else if(grade >= 60 && grade <= 69){
 console.log('Your Grade is C')

}
else if(grade >= 50 && grade <= 59){
 console.log('Your Grade is D')

}
else if(grade >= 0 && grade <= 40){
 console.log('Your Grade is F')

}
else{
 console.log('Your Grade is B')

}

const monthOfTheYear = prompt('WHAT MONTTH IS IT?').trim().toLocaleLowerCase()

if(monthOfTheYear === 'september' || monthOfTheYear === 'october' || monthOfTheYear === 'november'){
    console.log('THE SEASON is AUTUMN because the month is ${monthOfTheYear}')
}