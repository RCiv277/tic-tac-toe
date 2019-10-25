// Constants / Codeblocks / Checkers       


function winPossibP1() {
(newPstnArry[0].PlayerOne && newPstnArry[1].PlayerOne && newPstnArry[3].PlayerOne) ||
(newPstnArry[3].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[5].PlayerOne) ||
(newPstnArry[6].PlayerOne && newPstnArry[7].PlayerOne && newPstnArry[8].PlayerOne) ||
(newPstnArry[0].PlayerOne && newPstnArry[3].PlayerOne && newPstnArry[6].PlayerOne) ||
(newPstnArry[1].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[7].PlayerOne) ||
(newPstnArry[2].PlayerOne && newPstnArry[5].PlayerOne && newPstnArry[8].PlayerOne) ||
(newPstnArry[0].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[8].PlayerOne) ||
(newPstnArry[6].PlayerOne && newPstnArry[4].PlayerOne && newPstnArry[2].PlayerOne) ? true : false;}

function winPossibP2() {
(newPstnArry[0].PlayerTwo && newPstnArry[1].PlayerTwo && newPstnArry[3].PlayerTwo) ||
(newPstnArry[3].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[5].PlayerTwo) ||
(newPstnArry[6].PlayerTwo && newPstnArry[7].PlayerTwo && newPstnArry[8].PlayerTwo) ||
(newPstnArry[0].PlayerTwo && newPstnArry[3].PlayerTwo && newPstnArry[6].PlayerTwo) ||
(newPstnArry[1].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[7].PlayerTwo) ||
(newPstnArry[2].PlayerTwo && newPstnArry[5].PlayerTwo && newPstnArry[8].PlayerTwo) ||
(newPstnArry[0].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[8].PlayerTwo) ||
(newPstnArry[6].PlayerTwo && newPstnArry[4].PlayerTwo && newPstnArry[2].PlayerTwo) ? true : false;}

function didSomeoneWin(){winPossibP1() || winPossibP2() ? true: false ;}










const pstnArryOg = ['LG' , 'NG' , 'CG' , 'LN' , 'TN' , 'CN' , 'LE' , 'NE' , 'CE']


// Global Variables: eso es un pecado

newPstnArry = []
turnOrder = true                // True = Player One! False = Player Two!

// Objects Main Array: Using an alignment access for positional reference IE:
//   LG (0) NG (1) CG (2)
//   LN (3) TN (4) CN (5)
//   LE (6) NE (7) CE (8)

function startGame(assnPlayer){    // ASSIGN A PLAYER VALUE PLX
    let playerOneWin = false
    let playerTwoWin = false    



   newPstnArry = pstnArryOg.map(element => {   //Resets The Board/Assigns Boardstate
        return {
        Status: 'Inert',
        PlayerOne: false,
        PlayerTwo: false,
        element
        }
    }
    )
};








//Function related to starting the game/deciding turn order/game logic

function winConditions(){
    didSomeoneWin() ? true: false; //if true display winner prompt  , if false carry on
}




//Functions related to dom/html/event listeners





//Notes/ Bugs
// Css Change button class to reflect inputs





