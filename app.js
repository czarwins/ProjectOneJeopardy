let citiesCat = [
    { question: 'Hometown of the Knickerbockers', answer: 'New York', score: $('#cities-1').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#cities-2').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#cities-3').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#cities-4').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#cities-5').text() },
];
let stadiumsCat = [
    { question: 'Hometown of the Knickerbockers', answer: 'New York', score: $('#stadiums-1').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#stadiums-2').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#stadiums-3').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#stadiums-4').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#stadiums-5').text() },
];
let legendsCat = [
    { question: 'Hometown of the Knickerbockers', answer: 'New York', score: $('#legends-1').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#legends-2').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#legends-3').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#legends-4').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#legends-5').text() },
];
let onCourtCat = [
    { question: 'Hometown of the Knickerbockers', answer: 'New York', score: $('#onCourt-1').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#onCourt-2').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('onCourt-3').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#onCourt-4').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#onCourt-5').text() },
];
let offCourtCat = [
    { question: 'Hometown of the Knickerbockers', answer: 'New York', score: $('#offCourt-1').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#offCourt-2').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('offCourt-3').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#offCourt-4').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#offCourt-5').text() },
];

let ansCnt = 0;
class JepQuestion {
    constructor(question, answer, score, cat, value,id) {
        this.question = question;
        this.answer = answer;
        this.score = score;
        this.cat= cat;
        this.value = value;
        this.id = id;
    }
    klik() {
        // console.log('test');
        
        $(this.cat + this.id).html(this.question);
        $(this.cat + this.id).css("font-size", "20px");
        $(this.cat + this.id).css("font-color", "yellow");
        
    }
    dblKlik() {
        let answer1 = prompt("Final Answer", "")
        let answer2 = answer1.toLowerCase();
        ansCnt++
        
        if(ansCnt == 25){
            // console.log('test');
            
            if(playerScore > 0){
            alert('Winner! You win $' + playerScore);
            // console.log(ansCnt)
            }else{
                alert("You Lost... Try again!")
            }
            }
        
        if (answer2 == this.answer.toLowerCase()) {
            alert("correct")
            
            
            playerScore += Number(this.score)
            $('#scoreBox').text(Number(playerScore))
            // console.log(Number(playerScore));      
          
        }
        
        else {
            alert("False")
            playerScore -= Number(this.score)
            $('#scoreBox').text(Number(playerScore))
            // console.log(Number(playerScore));
        }
    }

}
let playerScore = 0;


let citiesObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(citiesCat[counter].question, citiesCat[counter].answer, citiesCat[counter].score, '#cities-',100,counter + 1)
    citiesObj.push(workObj)
    $('#cities-' + (counter +1)).click(() => workObj.klik())
    $('#cities-' + (counter +1)).dblclick(() => workObj.dblKlik())
    
}

let stadiumsObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(stadiumsCat[counter].question, stadiumsCat[counter].answer, stadiumsCat[counter].score, '#stadiums-',100,counter + 1)
    stadiumsObj.push(workObj)
    $('#stadiums-' + (counter +1)).click(() => workObj.klik())
    $('#stadiums-' + (counter +1)).dblclick(() => workObj.dblKlik())
}

let legendsObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(legendsCat[counter].question, legendsCat[counter].answer, legendsCat[counter].score, '#legends-',100,counter + 1)
    legendsObj.push(workObj)
    $('#legends-' + (counter +1)).click(() => workObj.klik())
    $('#legends-' + (counter +1)).dblclick(() => workObj.dblKlik())
}
let onCourtObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(onCourtCat[counter].question, onCourtCat[counter].answer, onCourtCat[counter].score, '#onCourt-',100,counter + 1)
    onCourtObj.push(workObj)
    $('#onCourt-' + (counter +1)).click(() => workObj.klik())
    $('#onCourt-' + (counter +1)).dblclick(() => workObj.dblKlik())
}
let offCourtObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(offCourtCat[counter].question, offCourtCat[counter].answer, offCourtCat[counter].score, '#offCourt-',100,counter + 1)
    offCourtObj.push(workObj)
    $('#offCourt-' + (counter +1)).click(() => workObj.klik())
    $('#offCourt-' + (counter +1)).dblclick(() => workObj.dblKlik())
}
// audio
var sound = document.getElementById("myAudio"); 

function playAudio() { 
  sound.play(); 
} 

function pauseAudio() { 
  sound.stop(); 
}