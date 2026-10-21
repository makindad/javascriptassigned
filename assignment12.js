const scores = [
    { name: "asabeneh", score: 95 },
    { name: "Mathias", score: 80 },
    { name: "Elias", score: 50 },
    { name: "Martha", score: 85 },
    { name: "John", score: 100 },
    { name: "James", score: 66 },
    { name: "Peter", score: 76 },
    { name: "Jacob", score: 60 },
    { name: "Matthew", score: 54 },
    { name: "Nat", score: 81 }
]


// Get the ordered list from the HTML
let getNameList = document.getElementById('person1')


// Get the name input
let getPersonName = document.getElementById('personName')


// Get the score input
let getPersonScore = document.getElementById('personScore')


// Function for displaying the people
function displayPeople(){

    // Clear the list before displaying it again
    getNameList.innerHTML = ''


    // Loop through the scores array
    scores.map((person) => {

        // Only display people who scored above 70
        if(person.score > 70){

            getNameList.innerHTML +=
            `<li>${person.name} has ${person.score}</li>`

        }

    })

}


// Function that runs when the button is clicked
function AddNewPerson(){

    // Get what the user entered in the name input
    let name = getPersonName.value


    // Get the score and convert it into a number
    let score = Number(getPersonScore.value)


    // Check if both inputs have something inside them
    if(name !== '' && getPersonScore.value !== ''){

        // Add the new person to the scores array
        scores.push({
            name: name,
            score: score
        })


        // Clear the name input
        getPersonName.value = ''


        // Clear the score input
        getPersonScore.value = ''


        // Display the updated array
        displayPeople()


        // Show the updated array in the console
        console.log(scores)

    }

    else{

        alert('Please enter a name and score')

    }

}


// Display the original people when the page first loads
displayPeople()