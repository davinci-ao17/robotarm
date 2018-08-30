window.onload = function() {
    // LAAD DE LEVELS DOOR HET LEVEL GETAL IN DE ALERT TE VOEREN. SOMIGE LEVELS KUNNEN OOK EEN BONUS LEVEL ZIJN EN OM DIE TE LADEN MOET JE HET LEVEL NUMMER INVULLEN EN IN DE 2DE ALERT 1 IN TE VULLEN
    var levelNumber = prompt("Please enter level number (max 13, 5 doesn't exist):", "1");
    if (levelNumber == null || levelNumber == "" || isNaN(levelNumber) || levelNumber <= 0) {
        alert("NO LEVEL NUMBER. PLEASE RELOAD PAGE AND TRY AGAIN");
        return;
    }
    var isBonus = 0;
    if(levelNumber > 0 && levelNumber <= 5){
        isBonus = prompt("load bonus level? (0 = no, 1 = yes):", "0");
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
                    level6();
                    break;
                case "exercise 7":
                    level7();
                    break;
                case "exercise 8":
                    level8();
                    break;
                case "exercise 9":
                    level9();
                    break;
                case "exercise 10":
                    level10();
                    break;
                case "exercise 11":
                    level11();
                    break;
                case "exercise 12":
                    level12();
                    break;
                case "exercise 13":
                    level13();
                    break;
                default:
                    alert("cant load level");
            }
        }else if(isBonus == 1){
            switch(levelName) {
                case "exercise 1":
                    BonusLevel1();
                    break;
                case "exercise 2":
                    BonusLevel2();
                    break;
                case "exercise 3":
                    BonusLevel3();
                    break;
                case "exercise 4":
                    BonusLevel4();
                    break;
                case "exercise 5":
                    BonusLevel5();
                    break;
                default:
                    alert("cant load level");
            }
        }
        robotArm.run();
    }

    function level1(){
        robotArm.loadLevel("exercise 1");
        robotArm.moveRight();
        robotArm.grab();
        robotArm.moveLeft();
        robotArm.drop();
    }

    function level2(){
        robotArm.loadLevel("exercise 2");
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
        robotArm.loadLevel("exercise 3");
        for(var i = 0; i < 4; i++){
            robotArm.grab();
            robotArm.moveRight();
            robotArm.drop();
            robotArm.moveLeft();
        }
    }

    function level4(){
        robotArm.loadLevel("exercise 4");
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

    function level6(){
        robotArm.loadLevel("exercise 6");
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

    function level7(){
        robotArm.loadLevel("exercise 7");
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

    function level8(){
        robotArm.loadLevel("exercise 8");
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

    function level9(){
        robotArm.loadLevel("exercise 9");
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

    function level10(){
        robotArm.loadLevel("exercise 10");
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

    function level11(){
        robotArm.loadLevel("exercise 11");
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

    function level12(){
        robotArm.loadLevel("exercise 12");
        var count = 0;
        for(var i = 0; i < 9; i++){
            robotArm.grab();
            var color = robotArm.scan();
            if(color === "red"){
                for(var r = 0; r < (9-count); r++){
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

    function level13(){
        robotArm.randomLevel(1,8);
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
        robotArm.loadLevel("exercise 3");
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
        robotArm.loadLevel("exercise 6");
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
        robotArm.loadLevel("exercise 11");
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
        robotArm.loadLevel("exercise 9");
        var blocks = 1;
        var steps = 5;
        for(var r = 0; r < 4; r++){
            for(var c = 0; c < blocks; c++){
                robotArm.grab();
                for(var m = 0; m < 5; m++){
                    robotArm.moveRight();
                }
                robotArm.drop();
                for(var m = 0; m < 5; m++){
                    robotArm.moveLeft();
                }
            }
            blocks++;
            robotArm.moveRight();
        }
        for(var r = 0; r < 4; r++){
            robotArm.moveRight();
        }
        blocks = 4;
        for(var r = 0; r < 4; r++){
            for(var c = 0; c < blocks; c++){
                robotArm.grab();
                for(var m = 0; m < steps; m++){
                    robotArm.moveLeft();
                }
                robotArm.drop();
                for(var m = 0; m < steps; m++){
                    robotArm.moveRight();
                }
                steps++;
            }
            blocks--;
            steps = 5;
            robotArm.moveLeft();
        }
    }
    function BonusLevel5(){
        robotArm.randomLevel(4);
        var countRow1 = 0;
        var countRow2 = 0;
        var countRow3 = 0;
        var countRow4 = 0;
        var clears = 0;
        var color = null;
        var count = 1;
        
        for(var f = 0; f < count; f++){
            robotArm.grab();
            color = robotArm.scan();
            if(color != null){
                robotArm.moveRight();
                robotArm.drop();
                robotArm.moveLeft();
                count++;
                countRow1++;
            }
        }
        robotArm.moveRight();
        robotArm.moveRight();
        robotArm.moveRight();
        count = 1;
        for(var s = 0; s < count; s++){
            robotArm.grab();
            color = robotArm.scan();
            if(color != null){
                robotArm.moveLeft();
                robotArm.drop();
                robotArm.moveRight();
                count++;
                countRow2++;
            }
        }
        robotArm.moveLeft();
        for(var t = 0; t < countRow2; t++){
            robotArm.grab();
            robotArm.moveLeft();
            robotArm.moveLeft();
            robotArm.drop();
            robotArm.moveRight();
            robotArm.moveRight();
        }
        robotArm.moveLeft();
        for(var t = 0; t < countRow1; t++){
            robotArm.grab();
            robotArm.moveRight();
            robotArm.moveRight();
            robotArm.drop();
            robotArm.moveLeft();
            robotArm.moveLeft();
        }
        count = 1;
        for(var f = 0; f < count; f++){
            robotArm.grab();
            color = robotArm.scan();
            if(color != null){
                robotArm.moveLeft();
                robotArm.drop();
                robotArm.moveRight();
                count++;
                countRow3++;
            }
        }
        robotArm.moveRight();
        count = 1;
        for(var f = 0; f < count; f++){
            robotArm.grab();
            color = robotArm.scan();
            if(color != null){
                robotArm.moveRight();
                robotArm.drop();
                robotArm.moveLeft();
                count++;
                countRow4++;
            }
        }
        
        robotArm.moveRight();
        for(var t = 0; t < countRow4; t++){
            robotArm.grab();
            robotArm.moveLeft();
            robotArm.moveLeft();
            robotArm.drop();
            robotArm.moveRight();
            robotArm.moveRight();
        }
        robotArm.moveLeft();
        robotArm.moveLeft();
        robotArm.moveLeft();
        for(var t = 0; t < countRow3; t++){
            robotArm.grab();
            robotArm.moveRight();
            robotArm.moveRight();
            robotArm.drop();
            robotArm.moveLeft();
            robotArm.moveLeft();
        }
        
        
    }
};