//array stores motivational messages

let motivationalMsg = ["Dream big. Start small. Act now.", 
                       "Believe in yourself and all that you are.",
                       "Success is the sum of small efforts repeated daily.",
                       "You are stronger than you think.",
                       "Great things never come from comfort zones.",
                       "Turn your setbacks into comebacks.",
                       "Every day is a new opportunity.",
                       "Push yourself because no one else will.",
                       "Stay positive, work hard, make it happen.",
                       "Your only limit is you.",

];


function getRandomMsg(array){
    const randomIndex= Math.floor(Math.random()*array.length);
    return (array[randomIndex]);
};






const showRandomMsg= getRandomMsg(motivationalMsg);
let buttonOne = document.getElementById('generate');
let buttonTwo = document.getElementById('next');
let textSpace = document.getElementById('text');
let buttonThree = document.getElementById('reset');

buttonTwo.hidden = true;
buttonThree.hidden = true;

buttonOne.onclick = function (){

    textSpace.innerHTML = showRandomMsg;
    buttonTwo.hidden = false;
    buttonOne.hidden = true;

}

buttonTwo.onclick = function(){

    textSpace.innerHTML = "That's all for today! Come Again Tomorrow!"
    buttonThree.hidden = false;
    buttonTwo.hidden = true;
}

buttonThree.onclick = function (){

    textSpace.innerHTML = '';
    buttonThree.hidden = true;
    buttonTwo.hidden = true;
    buttonOne.hidden = false;
    location.reload();


}