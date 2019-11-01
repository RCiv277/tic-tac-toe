// Constants / Codeblocks / Checkers       

let reset = document.getElementById('reset')
console.log(reset)
reset.addEventListener('click' , startGame)

var arry = [[0,0,0],[0,0,0],[0,0,0]]


// Global Variables: eso es un pecado
startGame()
var turnOrder = 1                                                                          // True = Player One! False = Player Two! 
function startGame(){        
  for (let i = 0; i < 9; i++){
    let element = document.getElementById(`${i}`)
    element.style.backgroundImage = 'none'
    element.addEventListener('click' , reactToClick)}
    arry = [[0,0,0],
    [0,0,0],
    [0,0,0]]

        };
        
        
        
        
        
        /*
        
        
        //Function related to starting the game/deciding turn order/game logic
        
        function winConditions(){
            didSomeoneWin() ? true:
            false; //if true display winner prompt  , if false change turn prompt and image
        }*/
        function reactToClick(){
            
            let wchBtnClck = event.target.id
            
            turnOrder === 1 ? turnOrder = -1 : turnOrder = 1;
            
            event.target.style.backgroundImage = turnOrder === -1 ? " url(./image/shaz.jpg)" :"url(./image/and.jpg)" ;
            event.target.style.objectFit = 'cover';
            event.target.removeEventListener('click', reactToClick)
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
    
        
    
    
    //Notes/ Bugs
    // Css Change button class to reflect inputs
    
    
    
        
        function didSomeoneWin(){(winPossibP1 || winPossibP2) ? true: false ;}
    


        function tree0(){
            console.log(arry)
            if (arry[0][0] == -1){
              if (arry[1][0] == -1){
              arry[2][0] == -1 ? playerOneWin() : 0;
              } 
              else if (arry[0][1] == -1) {
                arry[0][2] == -1 ? playerOneWin() : 0;
              }
          
              else if (arry[1][1] == -1) {
                arry[2][2]== -1 ? playerOneWin() : 0;
                }
              }
            else{
              if (arry[1][0] == 1){
              arry[2][0] == 1 ? playerTwoWin() : 0;
              } 
              else if (arry[0][1] == 1) {
                arry[0][2] == 1 ? playerTwoWin() : 0;
              }
          
              else if (arry[1][1] == 1) {
                arry[2][2]== 1 ? playerTwoWin() : 0;
                }
            }
            }
          
          function tree1(){
            console.log(arry)
            if (arry[1][0] == -1){
              if (arry[0][0] == -1){
              arry[2][0] == -1 ? playerOneWin() : 0;
              } 
              else if (arry[1][1] == -1) {
                arry[1][2] == -1 ? playerOneWin() : 0;
              }
              else {console.log('No win 1')}
              }
            else{
              if (arry[0][0] == 1){
              arry[2][0] == 1 ? playerTwoWin() : 0;
              } 
              else if (arry[1][1] == 1) {
                arry[1][2] == 1 ? playerTwoWin() : 0;
              }
              else{console.log('No win -1')}
            }
          }
          
          function tree2 () {
            console.log(arry)
            if (arry[0][0] == -1){
              if (arry[1][0] == -1){
              arry[2][0] == -1 ? playerOneWin() : 0;
              } 
              else if (arry[0][1] == -1) {
                arry[0][2] == -1 ? playerOneWin() : 0;
              }
          
              else if (arry[1][1] == -1) {
                arry[2][2]== -1 ? playerOneWin() : 0;
                }
              else {console.log('No win 1')}
              }
            else{
              if (arry[1][1] == 1){
              arry[2][0] == 1 ? playerTwoWin() : 0;
              } 
              else if (arry[0][1] == 1 ){
                arry[0][0] == 1 ? playerTwoWin() : 0;
              }
          
              else if (arry[1][2] == 1) {
                arry[2][2]== 1 ? playerTwoWin() : 0;
                }
            }
          }


function tree3(){
    console.log(arry)
    if (arry[1][0] == -1){
        if (arry[2][0] == -1){
            arry[0][0] == -1 ? playerOneWin() : 0;
        }
        else if (arry[1][1] == -1){
            arry[1][2] == -1 ? playerOneWin() : 0;
        }
    }
    else{
        if (arry[2][0] == 1){
            arry[0][0] == 1 ? playerTwoWin() : 0;
        }
        else if (arry[1][1] == 1){
            arry[1][2] == 1 ? playerTwoWin() : 0;
        }
    }

}
function tree4(){
    console.log(arry)
    if (arry[1][1] == -1){
      if (arry[0][0] == -1){
      arry[2][2] == -1 ? playerOneWin() : 0;
      } 
      else if (arry[0][1] == -1) {
        arry[2][1] == -1 ? playerOneWin() : 0;
      }
      else if (arry[2][0] == -1) {
        arry[0][2] == -1 ? playerOneWin() : 0;
      }
      else if (arry[1][0] == -1) {
        arry[1][2] == -1 ? playerOneWin() : 0;
      }
      else {console.log('No win 1')}
      }
    else{
      if (arry[0][0] == 1){
        arry[2][2] == 1 ? winner : 0;
      } 
      else if (arry[0][1] == 1) {
            arry[2][1] == 1 ? playerTwoWin() : 0;
      }
      else if (arry[2][0] == 1) {
            arry[0][2] == 1 ? playerTwoWin() : 0;
      }
      else if (arry[1][0] == 1) {
            arry[1][2] == 1 ? playerTwoWin() : 0;
      }
    }
  }

  function tree5(){
    console.log(arry)
    if (arry[1][2] == -1){
      if (arry[0][2] == -1){
          arry[2][2] == -1 ? playerOneWin() : 0;
      }
      else if (arry[1][1] == -1){
          arry[1][0] == -1 ? playerOneWin() : 0;
      }
    }
    else{
        if (arry[0][2] == 1){
            arry[2][2] == 1 ? playerTwoWin() : 0;
        }
        else if (arry[1][1] == 1){
            arry[1][0] == 1 ? playerTwoWin() : 0;
        }
    }
}

function tree6(){ 
    console.log(arry)
    if (arry[2][0] == -1){
        if (arry[1][0] == -1){
            arry[0][0] == -1 ? playerOneWin() : 0;
        }
        else if (arry[1][1] == -1){
            arry[0][2] == -1 ? playerOneWin() : 0;
        }
        else if (arry[1][2] == -1){
            arry[2][2] == -1 ? playerOneWin() : 0;
        }
    }
    else{
        if (arry[0][2] == 1){
            arry[2][2] == 1 ? playerTwoWin() : 0;
        }
        else if (arry[1][1] == 1){
            arry[1][0] == 1 ? playerTwoWin() : 0;
        }
        else if (arry[1][2] == 1){
            arry[2][2] == 1 ? playerTwoWin() : 0;
        }
    }
}

function tree7(){
    console.log(arry)
    if (arry[2][1] == -1){
      if (arry[0][1] == -1){
      arry[1][1] == -1 ? playerOneWin() : 0;
      } 
      else if (arry[2][0] == -1) {
        arry[2][2] == -1 ? playerOneWin() : 0;
      }
    }
    else{
      if (arry[0][1] == 1){
      arry[1][1] == 1 ? playerTwoWin() : 0;
      } 
      else if (arry[2][0] == 1) {
          arry[2][2] == 1 ? playerTwoWin() : 0;
      }
    }
  }

function tree8(){
    console.log(arry)
    if (arry[2][2] == -1){
      if (arry[1][2] == -1){
        arry[0][2] == -1 ? playerOneWin() : 0;
      } 
      else if (arry[0][0] == -1) {
        arry[1][1] == -1 ? playerOneWin() : 0;
      }
      else if (arry[2][0] == -1) {
        arry[2][1]== -1 ? playerOneWin() : 0;
      }
      else {console.log('No win 1')}
      }
    else{
      if (arry[1][2] == 1){
        arry[0][2] == 1 ? playerTwoWin() : 0;
        } 
      else if (arry[0][0] == 1) {
        arry[1][1] == 1 ? playerTwoWin() : 0;
        }
      else if (arry[2][0] == 1) {
        arry[2][1]== 1 ? playerTwoWin() : 0;
        }
    }  
}     

function playerOneWin(nothing){
  for (let i = 0; i < 9; i++){
    let element = document.getElementById(`${i}`)
    element.removeEventListener('click' , reactToClick)}
    arry.forEach(function(element, i){
        arry[i].forEach(function(ele, t){
            arry[i][t] == -1 ? document.getElementById(`${((i * 3) + t)}`).style.backgroundImage = 'url(./image/shazwin.jpg)': 0;
        })
    });

}

function playerTwoWin(nothing){
  for (let i = 0; i < 9; i++){
    let element = document.getElementById(`${i}`)
    element.removeEventListener('click' , reactToClick)}
    arry.forEach(function(element, i){
        arry[i].forEach(function(ele, t){
            arry[i][t] == 1 ? document.getElementById(`${((i * 3) + t)}`).style.backgroundImage = 'url(./image/andwin.jpg)': 0;
        })
    });

}
