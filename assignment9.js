let getDiv = document.querySelector('.sam')

let createOl = document.createElement('ol')

getDiv.appendChild(createOl)

function addLi(){

    let name = prompt('Which name should we add?')

    if(name !== '' && name.trim() !== ''){

        let createList = document.createElement('li')

        createList.innerText = name

        createOl.appendChild(createList)

    }

    else{

        alert('Please enter a name')

    }

}