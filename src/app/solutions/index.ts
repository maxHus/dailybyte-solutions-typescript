import { Type } from '@angular/core';
import { CallCounterSolution } from './CallCounterSolution';
import { MovingAverageSolution } from './MovingAverageSolution';
import { RemoveAdjacentDuplicatesSolution } from './RemoveAdjacentDuplicatesSolution';
import { VacuumCleanerRouteSolution } from './VacuumCleanerRouteSolution';

const CommonDeps: Type<any>[] = [];

export const SolutionProvider: any[] = [
  { provide: 'CallCounterSolution', useClass: CallCounterSolution, deps: CommonDeps },
  { provide: 'MovingAverageSolution', useClass: MovingAverageSolution, deps: CommonDeps},
  { provide: 'RemoveAdjacentDuplicatesSolution', useClass: RemoveAdjacentDuplicatesSolution, deps: CommonDeps},
  { provide: 'VacuumCleanerRouteSolution', useClass: VacuumCleanerRouteSolution, deps: CommonDeps},
];
