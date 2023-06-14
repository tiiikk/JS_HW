// And you need to take inputs from the user: Coordinates of the selected ball and coordinates
// to another point.(). You need to check if it is possible to move the selected ball to input coordinates,
//     and if it is possible move the ball.
// (in our case, the balls will be letters according to which their colors will be distinguished).
// It would be good for you to use some classes, objects and so on…
// After every step you need to randomly add balls to the board. board sizes must be greater than 9x9




// * * * * *
// * r * * *
// * * * * g
// * r * * *
// * * * * *

let color_balls = ['r', 'g', 'b', 'w', 'y'];

let field = [
    ['*', 'r', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', 'g', 'r', 'g', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', 'b', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*']
];

// function add_random() {
//     for (let i = 0; i < 3; i++) {
//         let randomColumnIndex = Math.trunc(Math.random() * 9);
//         let randomRowIndex = Math.trunc(Math.random() * 5);
//         let randomColorBall = Math.trunc(Math.random() * 5);
//
//         while (field[randomRowIndex][randomColumnIndex] !== '*') {
//             randomColumnIndex = Math.trunc(Math.random() * 9);
//             randomRowIndex = Math.trunc(Math.random() * 5);
//         }
//
//         field[randomRowIndex][randomColumnIndex] = color_balls[randomColorBall];
//
//     }
// }
// add_random()
//
// console.log(field)


function checkSelectedBall (aCol, aRow) {
    if (field[aCol][aRow] === '*'){
        return 'The selected field is not a color ball!'
    }
    return true
}
let checkBall = checkSelectedBall(1,1);

function checkDestinationCoordinates (bCol, bRow){
    if (field[bCol][bRow] === '*'){
        return true
    }
    return 'The box is occupied'
}

let checkDestination = checkDestinationCoordinates(0,1)




function checkUp (currentCol, currentRow){
    if (field[currentCol -1][currentRow] === '*'){
        return true;
    }else{
        directionChangerForUP_Down(currentCol, currentRow)
    }
    return false;
}
function checkDown (currentCol, currentRow){
    if (field[currentCol + 1][currentRow] === '*'){
        return true;
    }
    return false;
}

function checkRight (currentCol, currentRow){
    if (field[currentCol][currentRow + 1] === '*'){
        return true;
    }
    return false;
}

function checkLeft (currentCol, currentRow){
    if (field[currentCol][currentRow - 1] === '*'){
        return true;
    }
    return false;
}

function moveUp (aCol, aRow){
    if(checkUp(aCol,aRow)){
        field[aCol - 1][aRow] = field[aCol][aRow];
        field[aCol][aRow] = '*';
        return true

    }
    return false
}

function moveDown (aCol, aRow){
    if(checkDown(aCol,aRow)){
        console.log(true)
        field[aCol + 1][aRow] = field[aCol][aRow];
        field[aCol][aRow] = '*';
        return field

    }
    return false
}

function moveLeft (aCol, aRow){
    if(checkLeft(aCol,aRow)){
        console.log(true)
        field[aCol][aRow - 1] = field[aCol][aRow];
        field[aCol][aRow] = '*';
        return field

    }
    return false
}



function moveRight (aCol, aRow){
    if(checkRight(aCol,aRow)){
        console.log(true)
        field[aCol][aRow +1] = field[aCol][aRow];
        field[aCol][aRow] = '*';
        return field

    }
    return false
}

function directionChangerForUP_Down (currCol, currRow){
    if (checkLeft(currCol, currRow)){
        moveLeft(currCol, currRow)
    }else if(checkRight(currCol,currRow)){
        moveRight(currCol, currRow)
    }
}
function userMove (aCol, aRow, bCol, bRow){
    if (checkSelectedBall(aCol,aRow) && checkDestinationCoordinates(bCol,bRow)){
        if (aCol - bCol > 0){
            while (!(color_balls.includes(field[bCol][bRow]))){
                moveUp(aCol, aRow)
                aCol--
            }
        }return field
    }

}

console.log(userMove(3,4,0,4))


