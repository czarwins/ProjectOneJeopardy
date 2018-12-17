$(document).ready(function(){
    $('#citiesOne').click(function(){
        console.log($(this).text());

    })

    $('#citiesOne').click(function qlik(){
        $(this).text("The hometown of the Knickerbockers ");
        $(this).css("font-size","20px");
});
});
$(document).ready(function dblQlik(){
$('#citiesOne').dblclick(function(){ 

let answer1 = prompt("Final Answer","")
let answer2 = answer1.toLowerCase();

if(answer2 == "new york"){
    alert("correct")
}

else{
    alert("false")
}
})
});

let testy = "Where are the Knickerbockers located?";


// constructor functions
function Game(player1,player2,board){
    this.player1 = player1;
    this.player2 =player2;
    this.players = [this.player1,this.player2];
    this.currentPlayerIndex = 0;
    this.currentPlayer = this.players[this.currentPlayerIndex];

    this.newGame();
}

function Player (name){
    this.name = name;
    this.score = 0;
    // this.correct = this.addPoints();
    // console.log(this.score);
    
}
function Que(question,answer,score){
    this.question = question;
    this.answer = answer;
    this.score = score
    console.log(score);
    
}
// end constructor functions

// Game methods

const citiesOne = new Que('hometown of the Knickerbockers','New York',$('#citiesOne').text())
console.log(citiesOne);

