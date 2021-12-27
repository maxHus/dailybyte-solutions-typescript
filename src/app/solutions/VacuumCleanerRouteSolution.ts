// This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.
// Ex: Given the following strings...
// "LR", return true
// "URURD", return false
// "RUULLDRD", return true
import { ISolution } from "./ISolution";


export class VacuumCleanerRouteSolution implements ISolution {
  //#region SolutionOne
  SolutionOne(inputArray: string[]): boolean {
    const Count = {
      U: 0, D: 0, R: 0, L: 0,
    };
    for (let i = 0; i < inputArray.length; i += 1) {
      switch (inputArray[i]) {
        case 'U': {
          Count.U += 1;
          break;
        }
        case 'D': {
          Count.D += 1;
          break;
        }
        case 'R': {
          Count.R += 1;
          break;
        }
        case 'L': {
          Count.L += 1;
          break;
        }
        default: {
          break;
        }
      }
    }
    return Count.D === Count.U && Count.L === Count.R;
  }
  //#endregion SolutionOne

  Main() {
    console.log(this.SolutionOne("RUULLDRD".split('')));
  }
}
