// Constants / Codeblocks / Checkers       

var newPstnArry = []
var pstnArryOg = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8']
startGame()




























function winPossibP1() {return(
    (newPstnArry[0].PlayerOne && newPstnArry[1].PlayerOne && newPstnArry[3].PlayerOne) ||
    (newPstnArry[3].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[5].PlayerOne) ||
    (newPstnArry[6].PlayerOne && newPstnArry[7].PlayerOne && newPstnArry[8].PlayerOne) ||
    (newPstnArry[0].PlayerOne && newPstnArry[3].PlayerOne && newPstnArry[6].PlayerOne) ||
    (newPstnArry[1].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[7].PlayerOne) ||
    (newPstnArry[2].PlayerOne && newPstnArry[5].PlayerOne && newPstnArry[8].PlayerOne) ||
    (newPstnArry[0].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[8].PlayerOne) ||
    (newPstnArry[6].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[2].PlayerOne))}
    
    function winPossibP2() {return(
    (newPstnArry[0].PlayerTwo && newPstnArry[1].PlayerTwo && newPstnArry[3].PlayerTwo) ||
    (newPstnArry[3].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[5].PlayerTwo) ||
    (newPstnArry[6].PlayerTwo && newPstnArry[7].PlayerTwo && newPstnArry[8].PlayerTwo) ||
    (newPstnArry[0].PlayerTwo && newPstnArry[3].PlayerTwo && newPstnArry[6].PlayerTwo) ||
    (newPstnArry[1].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[7].PlayerTwo) ||
    (newPstnArry[2].PlayerTwo && newPstnArry[5].PlayerTwo && newPstnArry[8].PlayerTwo) ||
    (newPstnArry[0].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[8].PlayerTwo) ||
    (newPstnArry[6].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[2].PlayerTwo))}
    
    function didSomeoneWin(){winPossibP1() || winPossibP2() ? true: false ;}

// Global Variables: eso es un pecado

var turnOrder = true                                                                           // True = Player One! False = Player Two!
var playerOneWin = false
var playerTwoWin = false  
    
// Objects Main Array: Using an alignment access(outdated info efficency wise; i did a good) for positional reference IE:
//   LG (0) NG (1) CG (2)
//   LN (3) TN (4) CN (5)
//   LE (6) NE (7) CE (8)

function startGame(assnPlayer){    
    playerOneWin = false
    playerTwoWin = false    
    turnOrder = true
    
    newPstnArry = pstnArryOg.map(element => {                                                    //Resets The Board/Assigns Boardstate
        return {
            PlayerOne: false,
            PlayerTwo: false,
                item: document.getElementById(`${element}`),                                    //much much much faith
            }
        }
        )
        console.log(newPstnArry[0].PlayerOne)
    };
    
    
    
    
    
    /*
    
    
    //Function related to starting the game/deciding turn order/game logic
    
    function winConditions(){
        didSomeoneWin() ? true:
        false; //if true display winner prompt  , if false change turn prompt and image
    }*/
    function reactToClick(elem){
        /*    event.target = display picture (turnOrder ?  shaz pic  0: 0 andrew pic ;)
        winConditions() */
        
        let wchBtnClck = event.target.id
        turnOrder ? newPstnArry[wchBtnClck].PlayerOne = true : newPstnArry[wchBtnClck].PlayerTwo = true;
        
        
        event.target.style.backgroundImage =  turnOrder? " url(./image/shaz.jpg)" :"url(./image/and.jpg)" ;
        didSomeoneWin() ? window.prompt(`Congratulation`) : 0;
        turnOrder? turnOrder = false: turnOrder = true;
        
    }
    
    
    
    //Functions related to dom/html/event listeners
    //event target
    
    newPstnArry.forEach(function(element){
        element.item.addEventListener('click' , reactToClick)
        
    });
    
    //Notes/ Bugs
    // Css Change button class to reflect inputs
    
    
    function testing(whut){
        console.log('hi')
    }
    
        
        function didSomeoneWin(){(winPossibP1 || winPossibP2) ? true: false ;}
    