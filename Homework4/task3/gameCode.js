var event, answerCorrect=0,money=0;
var ok = false;


function startGame() {
    //answerCorrect = 0;
    for (var i = 0; i < questions.length; i++) {
        do {
            event = parseInt(prompt(questions[i].question + "\n" + questions[i].answer1 + "\n" + questions[i].answer2 + "\n" +
                questions[i].answer3 + "\n" + questions[i].answer4 + "\n" + '-1 - Выход из игры'));
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(event);
                
            }
        } while (!ok);
        if(event == questions[i].correct) {
            answerCorrect++; 
            money+=100;          
        } else {

            break;
        }
    }
    alert("Кол-во правильных ответов: " + answerCorrect);
    alert('Спасибо за игру');
}



//------------------------------------------
function isAnswer(event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
    
}
