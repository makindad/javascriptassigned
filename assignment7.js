function generateColor() {

    let characters = '0123456789ABCDEF'
    let color = '#'

    for(let p = 0; p < 6; p++) {

        let randCha = Math.floor(Math.random() * characters.length)

        color = color + characters[randCha]
    }

    console.log(color)

    // document.body.style.backgroundColor = color

    // alert(`Your hex color is ${color}`)
}


function generatePassword() {

    let characters = '1234567890!@#$%^&*qwertyuioplkjhgfdsazxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let numChar = Number(
        prompt('Enter the number of password characters you need generated')
    )

    let password = ''

    if(isNaN(numChar)) {

        alert('Please enter a valid number')

    }
    else {

        for(let p = 0; p < numChar; p++) {

            let randCha = Math.floor(
                Math.random() * characters.length
            )

            password = password + characters[randCha]
        }

        // alert(`Your password is: ${password}`)

        console.log(password)
    }
}

function checkSeason() {

    let season = ''

    if()

}