import { ISolution } from "./ISolution";

export class MovingAverageSolution implements ISolution {
  size: number = 0;

  constructor(size: number) {
    this.size = size;
  }

  //#region SolutionOne
  Data: any = [];

  index: number = 0;

  CurrentMovingAverage: number = 0;

  SolutionOne(value: number): number {
    // TODO: initialize your MovingAverage.
    let sumOfData = 0;
    if (this.Data.length <= this.size) { this.Data[this.index + 1] = value; }
    this.Data.forEach((x: any) => {
      sumOfData += x;
    });
    this.CurrentMovingAverage = sumOfData / this.Data.length;
    return Math.ceil(this.CurrentMovingAverage);
  }
  //#endregion olutionOne

  Main() {
    const mAvg: MovingAverageSolution = new MovingAverageSolution(3);

    console.log(mAvg.SolutionOne(3));
    console.log(mAvg.SolutionOne(5));
    console.log(mAvg.SolutionOne(7));

    console.log(mAvg.SolutionOne(6));
  }
}

