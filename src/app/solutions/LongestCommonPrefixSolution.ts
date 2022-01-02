// This question is asked by Microsoft. Given an array of strings, return the longest common prefix that is shared amongst all strings. 
// Note: you may assume all strings only contain lowercase alphabetical characters. 

// Ex: Given the following arrays...
// ["colorado", "color", "cold"], return "col"
// ["a", "b", "c"], return ""
// ["spot", "spotty", "spotted"], return "spot"
import { ISolution } from "./ISolution";

export class LongestCommonPrefixSolution implements ISolution {
    //#region SolutionOne
    SolutionOne(input: string[]): string {
        input = input.sort();
        let result = "";
        if (input.length == 1) {
            return input[0][0];
        }
        if (input.length == 0) {
            return "";
        }
        for (let i = 0; i < input[0].length; i++) {
            if (input[0][i] == input[input.length - 1][i]) {
                result = result + input[0][i];
            } else break;

        }
        return result;
    }
    //#endregion SolutionOne

    Main(): void {
        console.log(this.SolutionOne(["spot", "spotty", "spotted"]));
    }
}
