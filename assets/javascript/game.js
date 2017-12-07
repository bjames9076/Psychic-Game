

//Initi counter for wins
var count = 0;

//Initi counter for fails
var countTwo = 0;

//rng letter generation
var result = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);


document.onkeyup = function(event) {

 
 
    var letter = String.fromCharCode(event.keyCode).toLowerCase();


document.getElementById("guess").innerHTML = "Your guess was: " + letter;



if(letter == result){
    
    result = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
    countTwo = 0;
    count = count + 1;
    document.getElementById("Wins").innerHTML = "Wins: " + count;
    document.getElementById("numGuess").innerHTML = "Fails: " + 0;
    
    
}
else{

    if(countTwo > 7){
        alert("YOU LOSE");
        countTwo = 0;
        count = 0;
        document.getElementById("answer").innerHTML = "Answer: " + result;
        result = String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);
    }
    else{
        countTwo = countTwo + 1;
        document.getElementById("numGuess").innerHTML = "Fails: " + countTwo;
    }

}


}

