            // declare canvas variables
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            // declare image variables
            var p1stampImg = document.getElementById("p1stamp");
            var p2stampImg = document.getElementById("p2stamp");
            var gridImg = document.getElementById("gridImg");
            var player1VictoryScreen = document.getElementById("player1Victory");
            var player2VictoryScreen = document.getElementById("player2Victory");
            var noVictoryScreen = document.getElementById("noVictory");
            
            var stampingAudio = new Audio('audio/362622kermite607stamp.mp3');
            
            var tictactoeArray  = new Array(9);
            var turnCounter = 0;
            tictactoeArray.fill(0);
            var gameState = 0;

            
            function drawGrid(){
                ctx.drawImage(gridImg,0,0);
            }
            function drawP1(x,y){
                ctx.drawImage(p1stampImg,x,y);
                switchTurn();
                stampingAudio.play();
            }
            function drawP2(x,y){
                ctx.drawImage(p2stampImg,x,y);
                switchTurn();
                stampingAudio.play();
            }
            function drawP1Victory(){
                ctx.drawImage(player1VictoryScreen,0,0);
            }
            function drawP2Victory(){
                ctx.drawImage(player2VictoryScreen,0,0);
            }
            function drawnoVictory(){
                ctx.drawImage(noVictoryScreen,0,0);
            }
           
            
            
            
            function switchTurn(){
                turnCounter++;
                if (turnCounter%2 === 0){
                        var turnDisplay = "player 1's turn";
                        document.getElementById("turnDisplay").innerHTML = turnDisplay;
                    }
                else{
                    var turnDisplay = "player 2's turn";
                    document.getElementById("turnDisplay").innerHTML = turnDisplay;
                }
            }

            function checkRegion(x,y){
                if ((x <= 100) && (y <= 100)){
                    return 0;
                }
                else if ((x > 100) && (x <= 200) && (y <= 100)){
                    return 1;
                }
                else if ((x > 200) && (x <= 300) && (y <= 100)){
                    return 2;
                }
                else if ((x <= 100) && (y > 100) && (y <= 200)){
                    return 3;
                }
                else if ((x > 100) && (x <= 200) && (y > 100) && (y <= 200)){
                    return 4;
                }
                else if ((x > 200) && (x <= 300) && (y > 100) && (y <= 200)){
                    return 5;
                }
                else if ((x <= 100) && (y > 200) && (y <= 300)){
                    return 6;
                }
                else if ((x > 100) && (x <= 200) && (y > 200) && (y <= 300)){
                    return 7;
                }
                else if ((x > 200) && (x <= 300) && (y > 200) && (y <= 300)){
                    return 8;
                }
            }

            function checkWinCondition(){  //return 0 for no wins, a number for that player victory
                     if (((tictactoeArray[0] === 1) && (tictactoeArray[1] === 1) && (tictactoeArray[2] === 1)) || ((tictactoeArray[3] === 1) && (tictactoeArray[4] === 1) && (tictactoeArray[5] === 1))  || ((tictactoeArray[6] === 1) && (tictactoeArray[7] === 1) && (tictactoeArray[8] === 1)) || ((tictactoeArray[0] === 1) && (tictactoeArray[3] === 1) && (tictactoeArray[6] === 1)) || ((tictactoeArray[1] === 1) && (tictactoeArray[4] === 1) && (tictactoeArray[7] === 1)) || ((tictactoeArray[2] === 1) && (tictactoeArray[5] === 1) && (tictactoeArray[8] === 1)) || ((tictactoeArray[0] === 1) && (tictactoeArray[4] === 1) && (tictactoeArray[8] === 1)) || ((tictactoeArray[2] === 1) && (tictactoeArray[4] === 1) && (tictactoeArray[6] === 1))){
                    return 1;    
                }
                    else if (((tictactoeArray[0] === 2) && (tictactoeArray[1] === 2) && (tictactoeArray[2] === 2)) || ((tictactoeArray[3] === 2) && (tictactoeArray[4] === 2) && (tictactoeArray[5] === 2))  || ((tictactoeArray[6] === 2) && (tictactoeArray[7] === 2) && (tictactoeArray[8] === 2)) || ((tictactoeArray[0] === 2) && (tictactoeArray[3] === 2) && (tictactoeArray[6] === 2)) || ((tictactoeArray[1] === 2) && (tictactoeArray[4] === 2) && (tictactoeArray[7] === 2)) || ((tictactoeArray[2] === 2) && (tictactoeArray[5] === 2) && (tictactoeArray[8] === 2)) || ((tictactoeArray[0] === 2) && (tictactoeArray[4] === 2) && (tictactoeArray[8] === 2)) || ((tictactoeArray[2] === 2) && (tictactoeArray[4] === 2) && (tictactoeArray[6] === 2))){
                    return 2;    
                }
                else{
                    return 0;
                }
            }



            function updateLogic(){
                var mouseX = event.clientX;     
                var mouseY = event.clientY;
                if (gameState === 0){
                    if (turnCounter%2 === 0){
                        if (tictactoeArray[checkRegion(mouseX,mouseY)] === 0){
                            drawP1(mouseX-50,mouseY-50);
                            tictactoeArray[checkRegion(mouseX,mouseY)] = 1;
                        }
                    }
                    else {
                        if (tictactoeArray[checkRegion(mouseX,mouseY)] === 0){
                            drawP2(mouseX-50,mouseY-50);
                            tictactoeArray[checkRegion(mouseX,mouseY)] = 2;
                        }
                    }

                }
                if ((checkWinCondition() != 0) || turnCounter === 9){
                    gameState = checkWinCondition();
                    if (gameState === 1){
                        drawP1Victory();
                    }
                    else if (gameState === 2){
                        drawP2Victory();
                    }
                    else {
                        drawnoVictory();
                    }

                }
               
                var coords = "X " + mouseX + ",Y " + mouseY;
                document.getElementById("displayCoordinates").innerHTML = coords;
               
            }
            
            window.onload = function() {
                drawGrid();
                var turnDisplay = "player 1's turn";
                document.getElementById("turnDisplay").innerHTML = turnDisplay;
            }

