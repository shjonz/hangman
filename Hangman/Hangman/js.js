/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let words = [ 'python', 'javascript', 'html', 'css', 'react' ]

//to get random number
//let random = Math.floor(Math.random()*5)

//to display word
let wordsh2 = document.getElementById("words-h2")

//button to get word
let wordbutton = document.getElementById("word-btn")

//button to guess letter n update the score 
let guessbtn = document.getElementById("guess-btn")

//word array to update the hangman letters displayed
let letters = []

//word array guess words
let right_lett = []

//word array wrong words
let wrong_lett = []

let officialword = null

//solve bool
let solve = true
//console.log(solve)

//input
let input = document.getElementById('inp')


//if(solve) {
wordbutton.addEventListener('click', display_hang)
//solve = false
//}

function display_hang() { 	
	if (solve===true) {
		let word = getRandomword()
		upper = word.toUpperCase();
		officialword = upper
	
    	for (let i = 0; i < officialword.length; i++) {
    		letters.push(officialword[i])
    		right_lett.push('_')
    		wordsh2.textContent += ' ' + right_lett[i] + ' ' 
    	} 
	}
	solve = false
    //console.log(letters)
    //console.log(right_lett) 
}



function getRandomword() {
	let random = Math.floor(Math.random()*5)
	let wordchosen = words[random]
	return wordchosen
}

guessbtn.addEventListener('click', checkinput)

//input to guess letter
function checkinput() {

	for (let i=0; i<officialword.length; i++) {
		if ( wrong_lett.includes(input.value) ) {
    			document.getElementById('instruct-p').textContent = "letter already guessed"
    			
    		}
	    
	    else if (officialword[i]===input.value && letters.includes(input.value) ) { //checks if letter inside
            
            console.log('correct')

            right_lett[i] = officialword[i]
            wordsh2.textContent = ""
            
            for (let i =0; i<officialword.length; i++) {
            	wordsh2.textContent += ' ' + right_lett[i] + ' '
            }

    		
            document.getElementById("score-tb").insertRow(1).insertCell(0).innerHTML = right_lett[i]
            
            
            //some error here cant have wrong array pushing wrong input here
    		
    	} else if (letters.includes(input.value) === false && /^[a-zA-Z]+$/.test(input.value)  ) {
    			wrong_lett.push(input.value)
    			break
 
    	}
    	console.log(i)

	}
	input.value = ''
	    console.log(letters)
    	console.log(wrong_lett)
    	console.log(right_lett)
    	//console.log(count)
    let count = 0
    for (let i=0; i<letters.length; i++) {
    	if (letters[i] === right_lett[i]) {
    		count += 1
    	}
    }
    if (count === letters.length) {
    	document.getElementById('instruct-p').textContent = "word correct good job!"
    	wordsh2.textContent = ''
    	solve= true
    	right_lett = []
    	letters = []
    	wrong_lett =[]
    }

}
//update the text content 


