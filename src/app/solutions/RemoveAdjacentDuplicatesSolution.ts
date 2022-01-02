
import { ISolution } from "./ISolution";
//  This question is asked by Facebook. Given a string s containing only lowercase letters,
//  continuously remove adjacent characters that are the same and return the result.


// Ex: Given the following strings...
// s = "abccba", return ""
// s = "foobar", return "fbar"
// s = "abccbefggfe", return "a"
export class RemoveAdjacentDuplicatesSolution implements ISolution {
  //#region SolutionOne
  SolutionOne(inputArray: string[]): string {
    for (let i = 0; i < inputArray.length; i += 1) {
      if (inputArray[i] === inputArray[i + 1]) {
        inputArray.splice(i, 2);
        this.SolutionOne(inputArray);
      }
    }
    return inputArray.join('');
  }
  //#endregion SolutionOne

  Main() : void {
    console.log(this.SolutionOne("foobar".split('')));
  }
}
