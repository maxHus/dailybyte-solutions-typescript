import { Component, Injector } from '@angular/core';
import * as solutions from './solutions';
import { ISolution } from './solutions/ISolution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-byte-solutions';

  providerList = [];

  selectedProvider : string;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.providerList = solutions.SolutionProvider.map((x : any) => x.provide);
  }

  callSolution() {
    const injector = this.createInjector();
    const fn = injector.get(this.selectedProvider, '') as ISolution;
    fn.Main();
  }

  createInjector() {
    return Injector.create({
      providers: solutions.SolutionProvider,
      parent: this.injector
    });
  }

  onSelectionChange(event : any) {
    this.callSolution();
  }
}
