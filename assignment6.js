let characters ='0123456789ABCDEF'
let name = '#'

for(let p = 0; p< 7; ++p){

    let randCha = parseInt(Math.random() * characters.length)
    name = name + characters[randCha]
    // console.log(name)

}

console.log(name)

// let characters ='1234567890!@#$%^&*qwertyuioplkjhgfdsazxcvbnm,'
// let numChar = prompt(`enter the number of password character you need generated`)
// let name = ''

// for(let p = 0; p< numChar; ++p){

//     let randCha = parseInt(Math.random() * characters.length)
//     name = name + characters[randCha]
//     // console.log(name)

// }

// console.log(name)