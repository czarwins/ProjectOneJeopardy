let endGame = 0;
// if(x = 0; x < 25;x++){}
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
class GameJep {
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
        
    }
    dblKlik() {
        let answer1 = prompt("Final Answer", "")
        let answer2 = answer1.toLowerCase();
        ansCnt++
        
        if(ansCnt == 25){
            
            if(playerScore > 0){
            console.log('winner');
            // console.log(ansCnt)
            }else{
                console.log("loser")
            }
            }
        
        if (answer2 == this.answer.toLowerCase()) {
            alert("correct")
            
            
            playerScore += Number(this.score)
            $('#scoreBox').text(Number(playerScore))
            console.log(Number(playerScore));      
          
        }
        
        else {
            alert("False")
            playerScore -= Number(this.score)
            $('#scoreBox').text(Number(playerScore))
            console.log(Number(playerScore));
        }
    }

}
let playerScore = 0;


let citiesObj = [];
for (i = 0; i < 5; i++) {

    let workObj = new GameJep(citiesCat[i].question, citiesCat[i].answer, citiesCat[i].score, '#cities-',100,i + 1)
    citiesObj.push(workObj)
    $('#cities-' + (i +1)).click(() => workObj.klik())
    $('#cities-' + (i +1)).dblclick(() => workObj.dblKlik())
    
}

let stadiumsObj = [];
for (i = 0; i < 5; i++) {

    let workObj = new GameJep(stadiumsCat[i].question, stadiumsCat[i].answer, stadiumsCat[i].score, '#stadiums-',100,i + 1)
    stadiumsObj.push(workObj)
    $('#stadiums-' + (i +1)).click(() => workObj.klik())
    $('#stadiums-' + (i +1)).dblclick(() => workObj.dblKlik())
}

let legendsObj = [];
for (i = 0; i < 5; i++) {

    let workObj = new GameJep(legendsCat[i].question, legendsCat[i].answer, legendsCat[i].score, '#legends-',100,i + 1)
    legendsObj.push(workObj)
    $('#legends-' + (i +1)).click(() => workObj.klik())
    $('#legends-' + (i +1)).dblclick(() => workObj.dblKlik())
}
let onCourtObj = [];
for (i = 0; i < 5; i++) {

    let workObj = new GameJep(onCourtCat[i].question, onCourtCat[i].answer, onCourtCat[i].score, '#onCourt-',100,i + 1)
    onCourtObj.push(workObj)
    $('#onCourt-' + (i +1)).click(() => workObj.klik())
    $('#onCourt-' + (i +1)).dblclick(() => workObj.dblKlik())
}
let offCourtObj = [];
for (i = 0; i < 5; i++) {

    let workObj = new GameJep(offCourtCat[i].question, offCourtCat[i].answer, offCourtCat[i].score, '#offCourt-',100,i + 1)
    offCourtObj.push(workObj)
    $('#offCourt-' + (i +1)).click(() => workObj.klik())
    $('#offCourt-' + (i +1)).dblclick(() => workObj.dblKlik())
}