// Constants / Codeblocks / Checkers       

var newPstnArry = []
//var pstnArryOg = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8']
startGame()

var arry = [[0,0,0],[0,0,0],[0,0,0]]


























/*function winPossibP1() {return(
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
        
        function didSomeoneWin(){winPossibP1() || winPossibP2() ? true: false ;} */
        
        // Global Variables: eso es un pecado
        
        var turnOrder = 1                                                                          // True = Player One! False = Player Two!
        var playerOneWin = false
        var playerTwoWin = false  
        
        // Objects Main Array: Using an alignment access(outdated info efficency wise; i did a good) for positional reference IE:
        //   LG (0) NG (1) CG (2)
        //   LN (3) TN (4) CN (5)
        //   LE (6) NE (7) CE (8)
        
        function startGame(assnPlayer){        
            turnOrder = 1
            arry = [[0,0,0][0,0,0][0,0,0]]
            
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
            
            turnOrder === 1 ? turnOrder = -1 : turnOrder = 1;
            
            //event.target.style.backgroundImage =  (turnOrder === 1 ? " url(./image/shaz.jpg)" :"url(./image/and.jpg)" ;)
            event.target.style.backgroundColor = turnOrder === 1 ? 'blue': 'red';
            if(wchBtnClck == 0){
                arry[0][0] = turnOrder
                tree0()
            }
        else if(wchBtnClck == 1){
            arry[0][1] = turnOrder
            tree1()
        }
        else if(wchBtnClck == 2){
            arry[0][2] = turnOrder
            tree2()
        }
        else if(wchBtnClck == 3){
            arry[1][0] = turnOrder
            tree3()
        }
        else if(wchBtnClck == 4){
            arry[1][1] = turnOrder
            tree4()
        }
        else if(wchBtnClck == 5){
            arry[1][2] = turnOrder
            tree5()
        }
        else if(wchBtnClck == 6){
            arry[2][0] = turnOrder
            tree6()
        }
        else if(wchBtnClck == 7){
            arry[2][1] = turnOrder
            tree7()
        }
        else if(wchBtnClck == 8){
            arry[2][2] = turnOrder
            tree8()
        }
        
    }
    
    
    
    //Functions related to dom/html/event listeners
    //event target
    
    for (let i = 0; i < 9; i++){
        let element = document.getElementById(`${i}`)
        element.addEventListener('click' , reactToClick)}
    
    //Notes/ Bugs
    // Css Change button class to reflect inputs
    
    
    function testing(whut){
        console.log('hi')
    }
    
        
        function didSomeoneWin(){(winPossibP1 || winPossibP2) ? true: false ;}
    


        function tree0(){
            console.log(arry)
            if (arry[0][0] == -1){
              if (arry[1][0] == -1){
              arry[2][0] == -1 ? console.log('winner') : 0;
              } 
              else if (arry[0][1] == -1) {
                arry[0][2] == -1 ? console.log('winner') : 0;
              }
          
              else if (arry[1][1] == -1) {
                arry[2][2]== -1 ? console.log('winner') : 0;
                }
              else {console.log('No win 1')}
              }
            else{
              if (arry[1][0] == 1){
              arry[2][0] == 1 ? console.log('winner') : 0;
              } 
              else if (arry[0][1] == 1) {
                arry[0][2] == 1 ? console.log('winner') : 0;
              }
          
              else if (arry[1][1] == 1) {
                arry[2][2]== 1 ? console.log('winner') : 0;
                }
              else{console.log('No win -1')}
            }
          }
          function tree1(){
            console.log(arry)
            if (arry[1][0] == -1){
              if (arry[0][0] == -1){
              arry[2][0] == -1 ? console.log('winner') : 0;
              } 
              else if (arry[1][1] == -1) {
                arry[1][2] == -1 ? console.log('winner') : 0;
              }
              else {console.log('No win 1')}
              }
            else{
              if (arry[0][0] == 1){
              arry[2][0] == 1 ? console.log('winner') : 0;
              } 
              else if (arry[1,1] == 1) {
                arry[1][2] == 1 ? console.log('winner') : 0;
              }
              else{console.log('No win -1')}
            }
          }
          
          function tree2 () {
            console.log(arry)
            if (arry[0][0] == -1){
              if (arry[1][0] == -1){
              arry[2][0] == -1 ? console.log('winner') : 0;
              } 
              else if (arry[0][1] == -1) {
                arry[0][2] == -1 ? console.log('winner') : 0;
              }
          
              else if (arry[1][1] == -1) {
                arry[2][2]== -1 ? console.log('winner') : 0;
                }
              else {console.log('No win 1')}
              }
            else{
              if (arry[1][0] == 1){
              arry[2][0] == 1 ? console.log('winner') : 0;
              } 
              else if (arry[0][1] == 1 ){
                arry[0][2] == 1 ? console.log('winner') : 0;
              }
          
              else if (arry[1][1] == 1) {
                arry[2][2]== 1 ? console.log('winner') : 0;
                }
              else{console.log('No win -1')}
            }
          }


function tree3(){
    console.log(arry)
    if (arry[1][0] == -1){
        if (arry[2][0] == -1){
            arry[0][0] == -1 ? console.log('winner') : 0;
        }
        else if (arry[1][1] == -1){
            arry[2][1] == -1 ? console.log('winner') : 0;
        }
    }
    else{
        if (arry[2][0] == 1){
            arry[0][0] == 1 ? console.log('winner') : 0;
        }
        else if (arry[1][1] == 1){
            arry[2][1] == 1 ? console.log('winner') : 0;
        }
    }

}
function tree4(){
    console.log(arry)
    if (arry[1][1] == -1){
      if (arry[0][0] == -1){
      arry[2][2] == -1 ? console.log('winner') : 0;
      } 
      else if (arry[0][1] == -1) {
        arry[2][1] == -1 ? console.log('winner') : 0;
      }
      else if (arry[2][0] == -1) {
        arry[0][2] == -1 ? console.log('winner') : 0;
      }
      else if (arry[1][0] == -1) {
        arry[1][2] == -1 ? console.log('winner') : 0;
      }
      else {console.log('No win 1')}
      }
    else{
      if (arry[0][0] == 1){
        arry[2][2] == 1 ? winner : 0;
      } 
      else if (arry[0][1] = 1) {
            arry[2][1] == 1 ? console.log('winner') : 0;
      }
      else if (arry[2][0] = 1) {
            arry[0][2] == 1 ? console.log('winner') : 0;
      }
      else if (arry[1][0] = 1) {
            arry[1][2] == 1 ? console.log('winner') : 0;
      }
      else{console.log('No win -1')}
    }
  }

  function tree5(){
    console.log(arry)
    if (arry[1][2] == -1){
      if (arry[0][2] == -1){
          arry[2][2] == -1 ? 0 : 0;
      }
      else if (arry[1,1] == -1){
          arry[1][0] == -1? 0 : 0;
      }
    }
    else{
      if (arry[0][2] == -1){
          arry[2][2] == -1 ? 0 : 0;
      }
      else if (arry[1,1] == -1){
          arry[1][0] == -1? 0 : 0;
      }
    }
}
function tree6(){ 
    console.log(arry)
    if (arry[2][0] == -1){
        if (arry[1][0] == -1){
            arry[0][0] == -1 ? console.log('winner') : 0;
        }
        else if (arry[1][1] == -1){
            arry[0][2] == -1 ? console.log('winner') : 0;
        }
        else if (arry[1][2] == -1){
            arry[2][2] == -1 ? console.log('winner') : 0;
        }
    }
    else{
        if (arry[0][2] == 1){
            arry[2][2] == 1 ? console.log('winner') : 0;
        }
        else if (arry[1][1] == 1){
            arry[1][0] == 1 ? console.log('winner') : 0;
        }
        else if (arry[1][2] == 1){
            arry[2][2] == 1 ? console.log('winner') : 0;
        }
    }
}

function tree7(){
    console.log(arry)
    if (arry[2][1] == -1){
      if (arry[0][1] == -1){
      arry[1][1] == -1 ? console.log('winner') : 0;
      } 
      else if (arry[2][0] = -1) {
        arry[2][2] == -1 ? console.log('winner') : 0;
      }
    }
    else{
      if (arry[0][1] == -1){
      arry[1][1] == -1 ? console.log('winner') : 0;
      } 
      else if (arry[2][0] == -1) {
          arry[2][2] == -1 ? console.log('winner') : 0;
      }
    }
  }

function tree8(){
    console.log(arry)
    if (arry[2][2] == -1){
      if (arry[1][2] == -1){
        arry[0][2] == -1 ? console.log('winner') : 0;
      } 
      else if (arry[0][0] == -1) {
        arry[1][1] == -1 ? console.log('winner') : 0;
      }
      else if (arry[2][0] == -1) {
        arry[2][1]== -1 ? console.log('winner') : 0;
      }
      else {console.log('No win 1')}
      }
    else{
      if (arry[1][2] == 1){
        arry[0][2] == 1 ? console.log('winner') : 0;
        } 
      else if (arry[0][0] == 1) {
        arry[1][1] == 1 ? console.log('winner') : 0;
        }
      else if (arry[2][0] == 1) {
        arry[2][1]== 1 ? console.log('winner') : 0;
        }
      else if (arry[1][1] == 1) {
        arry[2][2]== 1 ? console.log('winner') : 0;
        }
    }  
}     