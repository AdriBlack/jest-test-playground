// App requirements

// 1) Plateau has to be rectangular so Rovers can get a complete view of earth
// 2) A Rover's position is determined by a combination of x, y and cardinal compass points
// 3) Command letters are  L , R and M. 
// 4) L and R makes the rover move 90 degrees left or right without moving spaces
// 5)  M moves one space in the direction. (Array of string commands)
// 6) Rover gets a string of commands and returns cordinates and direction

// POST 
// { 
//     "boundaries": "5 5",
//     "RoverOne": {
//       "position": "1 2 N",
//       "command": "LMLMLMLMM"
//     },
//     "RoverTwo": {
//       "position": "3 3 E",
//       "command": "MMRMMRMRRM"
//     }
//   }

// REPSONSE
// {
//   "RoverOne": {
//     "position": "1 3 N"
//   },
//   "RoverTwo": {
//     "position": "5 1 E"
//   }
// }



export const isPlateauRectangular = (x: number, y: number) => {
    if (x === y) {
      throw new Error('can not be equal each other')
    } else {
        return true
    }
}

export const roverTurnRight = (command: string) => {
    //checks valid input
    const convertToUppercase = command.toUpperCase()

//SWITCH REFACTOR

    for (let c of convertToUppercase) {
        console.log(c[0])

    let move = {
        x: 0,
        y: 0,
        command: 'N'
    }

        switch (convertToUppercase) {
            case 'R':
                return {
                    ...move,
                    command: 'E'
                }
            case 'RR':
                return {
                    ...move,
                    command: 'S'
                }
            case 'RRR':
                return {
                    ...move,
                    command: 'W'
                }
            case 'RRRR':
                return {
                    ...move,
                    command: 'N'
                }
            default:
                throw new Error('invalid input')
        }
    }
}

//Object Literal refactor

// export const getCommandResponse = (command: string) => {
//     const convertToUppercase = command.toUpperCase()
//     const move = {
//         x: 0,
//         y: 0,
//         command: 'N'
//     }
//     const getCommandResponse = {
//         'R': {
//             ...move,
//             command: 'E'
//         },
//         'RR':
//         {
//             ...move,
//             command: 'S'
//         },
//         'RRR':
//         {
//             ...move,
//             command: 'W'
//         },
//         'RRRR':
//         {
//             ...move,
//             command: 'N'
//         }
//     }
//     return getCommandResponse[convertToUppercase]
// }
