/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


let words = [ 'python', 'javascript', 'html', 'css', 'react' ];

//to get random number
//let random = Math.floor(Math.random()*5)

//to display word
let wordsh2 = document.getElementById("words-h2");

//button to get word
let wordbutton = document.getElementById("word-btn");

//button to guess letter n update the score 
let guessbtn = document.getElementById("guess-btn");

//word array to update the hangman letters displayed
let letters = [];

//word array guess words
let right_lett = [];

//word array wrong words
let wrong_lett = [];

let officialword = null;

//solve bool
let solve = true;
//console.log(solve)

//input
let input = document.getElementById('inp');

let maxWrong = 6;
let wrong = 0;

//if(solve) {
wordbutton.addEventListener('click', display_hang);
//solve = false
//}

function display_hang() {
    //wrong = 0;
    letters = [];
    right_lett = [];
    wrong_lett = [];
	if (solve===true) {
		let word = getRandomword();
		upper = word.toUpperCase();
		officialword = upper;
	
    	for (let i = 0; i < officialword.length; i++) {
    		letters.push(officialword[i]);
    		right_lett.push('_');
    		wordsh2.textContent += ' ' + right_lett[i] + ' ' ;
    	} 
        document.getElementById('instruct-p').textContent = '';
	}
	solve = false;
    console.log(letters)
    console.log(right_lett) 
}



function getRandomword() {
        wrong = 0;
	let random = Math.floor(Math.random()*5);
	let wordchosen = words[random];
	return wordchosen;
}

guessbtn.addEventListener('click', checkinput);

//input to guess letter
function checkinput() {
    document.getElementById('instruct-p').textContent = '';

	for (let i=0; i<officialword.length; i++) {
		if ( wrong_lett.includes(input.value) ) {
    			document.getElementById('instruct-p').textContent = "letter already guessed";
    			
    		}
	    
	    else if (officialword[i]===input.value && letters.includes(input.value) ) { //checks if letter inside
            
            console.log('correct');

            right_lett[i] = officialword[i];
            wordsh2.textContent = "";
            
            for (let i =0; i<officialword.length; i++) {
            	wordsh2.textContent += ' ' + right_lett[i] + ' ';
            }

    		
            document.getElementById("score-tb").insertRow(1).insertCell(0).innerHTML = right_lett[i];
            
            
            //some error here cant have wrong array pushing wrong input here
    		
    	} else if (letters.includes(input.value) === false && /^[a-zA-Z]+$/.test(input.value)  ) {
                        wrong++;
                        updateHangman();
                        gameOver();
    			wrong_lett.push(input.value);
                input.value ='';
                var table = document.getElementById("score-tb");

                // (B2) INSERT ROW
                
                var row = table.insertRow();

                // (B3) INSERT CELLS
                var cell = row.insertCell();
                cell.innerHTML = '';
                cell = row.insertCell();
                if (wrong_lett.length > 0) {
                    cell.innerHTML += wrong_lett[wrong_lett.length-1]; }
                }
    			
    	}
    	//console.log(i);

	
	input.value = '';
	    console.log(letters);
    	console.log(wrong_lett);
    	console.log(right_lett);
    	//console.log(count)
    let count = 0;
    for (let i=0; i<letters.length; i++) {
    	if (letters[i] === right_lett[i]) {
    		count += 1;
    	}
    }
    if (count === letters.length) {
    	document.getElementById('instruct-p').textContent = "word correct good job!";
        
    	wordsh2.textContent = '';
    	solve= true;
        
        for (let i = wrong_lett.length; i>0; i--) {
            document.getElementById('score-tb').deleteRow(i);
        }
        for (let i = right_lett.length; i>0; i--) {
            document.getElementById('score-tb').deleteRow(i);
        }
        right_lett = [];
        letters = [];
        wrong_lett =[];
    }
}
    
    function updateHangman(){
        document.getElementById('hangmanPic').src = './images/' + wrong + '.png';
    }
    
    function gameOver() {
        if (wrong === maxWrong) {
        document.getElementById('instruct-p').textContent = 'The answer was: ' + officialword;
        document.getElementById('instruct-p').textContent = 'You Lost!!!';
        solve = true;
        input.value = '';
        for (let i = wrong_lett.length; i>0; i--) {
            document.getElementById('score-tb').deleteRow(i);
        }
        for (let i = right_lett.length; i>0; i--) {
            document.getElementById('score-tb').deleteRow(i);
        }

  }
}


//update the text content 

