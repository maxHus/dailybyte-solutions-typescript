# DailyByteSolutions

This repository contains Typescript implementations of famous Daily bytes problems (https://thedailybyte.dev/) in an angular project.


## Development server

To install all dev dependencies

Call:

    npm install

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Contributions

Fork the repo and make required changes. Afterwards, push your changes in branch. The name will be according to the changes you did. Initiate the pull request.

Before pushing to the repository, run:

    npm run build

If the build is not successful, fix your code in order for the tests and jshint validation to run successfully. Then create a pull request.

## How To

If you are trying to add a solution to any problem, search if the solution file already exists.

For Example : You are adding a solution for Moving Average

Search if the solution file already exists, if it doesn't then add file inside 
src -> app -> solution folder

Keep the file name as problem name with 'Solution'
For Example : MovingAverageSolution.ts

1) Implement ISolution interface
2) Name the first method as SolutionOne()
3) Write down the solution
4) Import the new class in index.ts
5) Add it in SolutionProvider constant.

But if the File already exists and it has a one implementation already done, add a second method
with the name SolutionTwo()




