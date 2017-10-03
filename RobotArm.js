window.onload = function() {
    var levelNumber = prompt("Please enter level number:", "1");
    if (levelNumber == null || levelNumber == "" || isNaN(levelNumber) || levelNumber <= 0) {
        alert("NO LEVEL NUMBER. PLEASE RELOAD PAGE AND TRY AGAIN");
        return;
    }
    var isBonus = 0;
    if(levelNumber == 3 || levelNumber == 6 || levelNumber == 11 || levelNumber == 9 || levelNumber == 4){
        isBonus = prompt("is a bonus level? (0 = no, 1 = yes):", "0");
        if (isBonus == null || isBonus == "" || isNaN(isBonus) || isBonus < 0) {
            alert("NO VALID NUMBER. PLEASE RELOAD PAGE AND TRY AGAIN");
            return;
        }
    }
    
    var canvas = document.getElementById("canvas");
    var robotArm = new RobotArm(canvas);
    var levelName = "exercise " + levelNumber;
    robotArm.speed = 1000;
    calcRobotMovement(levelName);

    function calcRobotMovement(levelName){
        if(levelName === "exercise 13"){
            robotArm.randomLevel();
        }else{
            robotArm.loadLevel(levelName);
        }
        if(isBonus == 0){
            switch(levelName) {
                case "exercise 1":
                    level1();
                    break;
                case "exercise 2":
                    level2();
                    break;
                case "exercise 3":
                    level3();
                    break;
                case "exercise 4":
                    level4();
                    break;
                case "exercise 6":
                    level5();
                    break;
                case "exercise 7":
                    level6();
                    break;
                case "exercise 8":
                    level7();
                case "exercise 9":
                    level8();
                    break;
                case "exercise 10":
                    level9();
                    break;
                case "exercise 11":
                    level10();
                    break;
                case "exercise 12":
                    level11();
                    break;
                case "exercise 13":
                    level12();
                    break;
                default:
                    alert("cant load level");
            }
        }else if(isBonus == 1){
            switch(levelName) {
                case "exercise 3":
                    BonusLevel1();
                    break;
                case "exercise 6":
                    BonusLevel2();
                    break;
                case "exercise 11":
                    BonusLevel3();
                    break;
                case "exercise 9":
                    BonusLevel4();
                    break;
                case "exercise 4":
                    BonusLevel5();
                    break;
                default:
                    alert("cant load level");
            }
        }
        robotArm.run();
    }

    function level1(){
        robotArm.moveRight();
        robotArm.grab();
        robotArm.moveLeft();
        robotArm.drop();
    }

    function level2(){
        robotArm.grab();
        for(var i = 0; i < 9; i++){
            robotArm.moveRight();
        }
        robotArm.drop();
        for(var i = 0; i < 5; i++){
            robotArm.moveLeft();
        }
        robotArm.grab();
        for(var i = 0; i < 5; i++){
            robotArm.moveRight();
        }
        robotArm.drop();
        for(var i = 0; i < 2; i++){
            robotArm.moveLeft();
        }
        robotArm.grab();
        for(var i = 0; i < 2; i++){
            robotArm.moveRight();
        }
        robotArm.drop();
    }

    function level3(){
        for(var i = 0; i < 4; i++){
            robotArm.grab();
            robotArm.moveRight();
            robotArm.drop();
            robotArm.moveLeft();
        }
    }

    function level4(){
        for(var i = 0; i < 3; i++){
            robotArm.grab();
            robotArm.moveRight();
            robotArm.moveRight();
            robotArm.drop();
            robotArm.moveLeft();
            robotArm.moveLeft();
        }
        robotArm.moveRight();
        robotArm.moveRight();
        for(var i = 0; i < 3; i++){
            robotArm.grab();
            robotArm.moveLeft();
            robotArm.drop();
            robotArm.moveRight();
        }
    }

    function level5(){
        for(var i = 0; i < 7; i++){
            robotArm.moveRight();
        }
        for(var i = 0; i < 8; i++){
            robotArm.grab();
            robotArm.moveRight();
            robotArm.drop();
            robotArm.moveLeft();
            robotArm.moveLeft();
        }
    }

    function level6(){
        for(var r = 0; r < 5; r++){
            for(var i = 0; i < 6; i++){
                robotArm.moveRight();
                robotArm.grab();
                robotArm.moveLeft();
                robotArm.drop();
            }
            robotArm.moveRight();
            robotArm.moveRight();
        }
    }

    function level7(){
        robotArm.moveRight();
        for(var i = 0; i < 7; i++){
            robotArm.grab();
            for(var r = 0; r < 8; r++){
                robotArm.moveRight();
            }
            robotArm.drop();
            for(var l = 0; l < 8; l++){
                robotArm.moveLeft();
            }
        }
    }

    function level8(){
        var blocks = 1;
        for(var c = 0; c < 4; c++){
            for(var i = 0; i < blocks; i++){
                robotArm.grab();
                for(var r = 0; r < 5; r++){
                    robotArm.moveRight();
                }
                robotArm.drop();
                for(var l = 0; l < 5; l++){
                    robotArm.moveLeft()
                }
            }
            blocks++;
            robotArm.moveRight();
        }
    }

    function level9(){
        var count = 9;
        for(var r = 0; r < 5; r++){
            robotArm.grab();
            for(var i = 0; i < count; i++){
                robotArm.moveRight();
            }
            count--;
            robotArm.drop();
            for(var i = 0; i < count; i++){
                robotArm.moveLeft();
            }
            count--;
        }
    }

    function level10(){
        for(var i = 0; i < 9; i++){
            robotArm.moveRight();
        }
        
        for(var i = 0; i < 9; i++){
            robotArm.grab();
            var color = robotArm.scan();
            if(color === "white"){
                robotArm.moveRight();
                robotArm.drop();
                robotArm.moveLeft();
                robotArm.moveLeft();
            }else{
                robotArm.drop();
                robotArm.moveLeft();
            }
        }
    }

    function level11(){
        var count = 0;
        for(var i = 0; i < 9; i++){
            robotArm.grab();
            var color = robotArm.scan();
            if(color === "red"){
                for(var r = 0; r < (9-blocks); r++){
                    robotArm.moveRight();
                }
                robotArm.drop();
                for(var l = 0; l < (8-count); l++){
                    robotArm.moveLeft();
                }
            }else{
                robotArm.drop();
                robotArm.moveRight();
            }
            count++;
        }
    }

    function level12(){
        var count = 0;
        var placeCount = 0;
        for(var i = 0; i < 30; i++){
            robotArm.grab();
            var color = robotArm.scan();
            if(color != null){
                for(var r = 0; r < (9-count); r++){
                    robotArm.moveRight();
                }
                robotArm.drop();
                for(var l = 0; l < (9-count); l++){
                    robotArm.moveLeft();
                }
            }else{
                robotArm.moveRight();
                count++;
            }
        }
        
        for(var i = 0; i < 9; i++){
            robotArm.grab();
            for(var l = 0; l < (placeCount + 1); l++){
                robotArm.moveLeft();
            }
            robotArm.drop();
            for(var r = 0; r < (placeCount + 1); r++){
                robotArm.moveRight();
            }
            placeCount++;
        }
    }
    
    function BonusLevel1(){
        var steps = 2;
        for(var i = 0; i < 4; i++){
            robotArm.grab();
            for(var r = 0; r < steps; r++){
                robotArm.moveRight();
            }
            robotArm.drop();
            for(var r = 0; r < steps; r++){
                robotArm.moveLeft();
            }
            steps += 2;
        }
    }
    
    function BonusLevel2(){
        var steps = 2;
        var color = null;
        var moves = 0;
        for(var r = 0; r < 7; r++){
            robotArm.moveRight();
        }
        for(var r = 0; r < 8; r++){
            robotArm.grab();
            for(var m = 0; m < steps; m++){
                robotArm.moveRight();
            }
            steps++;
            robotArm.drop();
            for(var l = 0; l < steps; l++){
                robotArm.moveLeft();
            }
        }
        
        for(var r = 0; r < 9; r++){
            robotArm.moveRight();
        }
        
        for(var r = 0; r < 8; r++){
            robotArm.grab();
            color = robotArm.scan();
            if(color == "red"){
                for(var i = 0; i < 9; i++){
                    robotArm.moveLeft();
                }
                robotArm.drop();
                moves = 9
            }else if(color == "blue"){
                for(var i = 0; i < 8; i++){
                    robotArm.moveLeft();
                }
                robotArm.drop();
                moves = 8;
            }else if(color == "white"){
                for(var i = 0; i < 7; i++){
                    robotArm.moveLeft();
                }
                robotArm.drop();
                moves = 7;
            }else if(color == "green"){
                for(var i = 0; i < 6; i++){
                    robotArm.moveLeft();
                }
                robotArm.drop();
                moves = 6;
            }
            for(var i = 0; i < moves; i++){
                robotArm.moveRight();
            }
        }
    }
    
    function BonusLevel3(){
        var color = null;
        var red = 0;
        var green = 0;
        var blue = 0;
        var white = 0;
        var steps = 0;
        for(var r = 0; r < 9; r++){
            robotArm.moveRight();
            robotArm.grab();
            color = robotArm.scan();
            if(color == "red"){
                red++;
            }else if(color == "green"){
                green++;
            }else if(color == "blue"){
                blue++;
            }else if(color == "white"){
                white++;
            }
            robotArm.drop();
        }
        var r1 = Math.max(red, green);
        var r2 = Math.max(white, blue);
        var result = Math.max(r1, r2);
        var highest = "";
        console.log(result);
        
        if(red == result){
            highest = "red";
        }else if(green == result){
            highest = "green";
        }else if(blue == result){
            highest = "blue";
        }else if(white == result){
            highest = "white";
        }
        
        for(var r = 0; r < 9; r++){
            robotArm.grab();
            color = robotArm.scan();
            if(color == highest){
                for(var i = 0; i < (9 - steps); i++){
                    robotArm.moveLeft();
                }
                robotArm.drop();
                for(var i = 0; i < (8 - steps); i++){
                    robotArm.moveRight();
                }
                steps++;
            }else{
                robotArm.drop();
                robotArm.moveLeft();
                steps++;
            }
        }
    }
    
    function BonusLevel4(){
        
        
    }
};