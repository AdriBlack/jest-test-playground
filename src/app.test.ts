import { 
    isPlateauRectangular,
    roverTurnRight
    // getCommandResponse
} from './app'


describe('Establish Plateau', () => {
    it('isPlateauRectangular being called', () => {
        expect(isPlateauRectangular(2, 1)).toBeDefined();
    });
    it('Plateau should be rectangular', () => {
        expect(isPlateauRectangular(2, 1)).toBe(true);
    });
    it('It throws error if cordinates are equal', () => {
        function checkFunction() {
            isPlateauRectangular(2,2)
        }
        expect(checkFunction).toThrowError(new Error('can not be equal each other'));
    });

});
describe('Rover moves right', () => {
  it('check roverTurnRight function exists', () => {
    expect(roverTurnRight('R')).toBeDefined();
  })
  it('Rover turning right', () => {
      const newRoverPosition = {
          x: 0,
          y: 0,
          command: 'E'
      }

      function conditionRoverPosition(move: string) {
       
          const newRoverPosition = {
            x: 0,
            y: 0,
            command: 'E'
          }
       
          switch (move) {
              case 'R':
                  return {
                      ...newRoverPosition,
                      command: 'E'
                  }
                break;
              case 'RR':
                  return {
                      ...newRoverPosition,
                      command: 'S'
                  }
                break;
              case 'RRR':
                  return {
                      ...newRoverPosition,
                      command: 'W'
                  }
                break;
              case 'RRRR':
                  return {
                      ...newRoverPosition,
                      command: 'N'
                  }
                break;
          }
      }

      function checkInput() {
          roverTurnRight('5')
      }
    expect(roverTurnRight('R')).toEqual(newRoverPosition)
    expect(roverTurnRight('r')).toEqual(newRoverPosition)
    // expect(checkInput).toThrowError(new Error ('invalid input'))
    expect(roverTurnRight('R')).toEqual(conditionRoverPosition('R'))
    expect(roverTurnRight('RR')).toEqual(conditionRoverPosition('RR'))
    expect(roverTurnRight('RRR')).toEqual(conditionRoverPosition('RRR'))
    expect(roverTurnRight('RRRR')).toEqual(conditionRoverPosition('RRRR'))
    // expect(getCommandResponse('R')).toEqual(conditionRoverPosition('R'))
  })

});

