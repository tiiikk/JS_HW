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
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*', '*', '*', '*', '*']
];

function add_random() {
    for (let i = 0; i < 3; i++) {
        let randomColumnIndex = Math.trunc(Math.random() * 9);
        let randomRowIndex = Math.trunc(Math.random() * 5);
        let randomColorBall = Math.trunc(Math.random() * 5);

        while (field[randomRowIndex][randomColumnIndex] !== '*') {
            randomColumnIndex = Math.trunc(Math.random() * 9);
            randomRowIndex = Math.trunc(Math.random() * 5);
        }

        field[randomRowIndex][randomColumnIndex] = color_balls[randomColorBall];
    }
    return field
}
let startField = add_random();
console.log(startField)







