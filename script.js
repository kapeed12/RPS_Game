let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=['rock','paper','scissor'];
    const idx= Math.floor(Math.random()*3); // it will generate random number between 0 to 2.
    return options[idx];
}

const showWinner = (userWin,compChoice,userChoice)=>{
    if (userWin){
        // increase the userScore and display on UI.
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        // increase the computer score and display on UI.
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    // call the generate computer choice function.
    const compChoice=genCompChoice();
    //console.log(userChoice,compChoice);
    if (userChoice===compChoice){
        msg.innerText="Game was draw. Play again."
        msg.style.backgroundColor='orange';
    }
    else{
       let userWin=true;
       // compChoice is 'scissor' or 'paper'.
       if (userChoice==='rock'){
        userWin=compChoice==='paper'? false : true;
       }
       // compChoice is 'rock' or 'scissor'.
       else if(userChoice==='paper'){
            userWin= compChoice==='scissor'? false: true;
        }
        else{
                userWin= compChoice==='rock'? false: true;
            }
    showWinner(userWin,compChoice,userChoice);
    }
}

// what choice that user select.

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})