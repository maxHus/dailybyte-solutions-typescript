import { StaticProvider, Type } from '@angular/core';
import { CallCounterSolution } from './CallCounterSolution';
import { MovingAverageSolution } from './MovingAverageSolution';
import { RemoveAdjacentDuplicatesSolution } from './RemoveAdjacentDuplicatesSolution';
import { VacuumCleanerRouteSolution } from './VacuumCleanerRouteSolution';
import { LongestCommonPrefixSolution } from './LongestCommonPrefixSolution'

const CommonDeps: Type<any>[] = [];

export const SolutionProvider: StaticProvider[] = [
  { provide: 'CallCounterSolution', useClass: CallCounterSolution, deps: CommonDeps },
  { provide: 'MovingAverageSolution', useClass: MovingAverageSolution, deps: CommonDeps},
  { provide: 'RemoveAdjacentDuplicatesSolution', useClass: RemoveAdjacentDuplicatesSolution, deps: CommonDeps},
  { provide: 'VacuumCleanerRouteSolution', useClass: VacuumCleanerRouteSolution, deps: CommonDeps},
  { provide: 'LongestCommonPrefixSolution', useClass: LongestCommonPrefixSolution, deps: CommonDeps}
];
