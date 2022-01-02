import { Component, Injector, OnInit } from '@angular/core';
import * as solutions from './solutions';
import { ISolution } from './solutions/ISolution';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'daily-byte-solutions';

  providerList = [];

  selectedProvider: string;

  constructor(private injector: Injector) {
  }

  ngOnInit(): void {
    this.providerList = solutions.SolutionProvider.map((x : any) => x.provide);
  }

  callSolution(): void {
    const injector = this.createInjector();
    const fn = injector.get(this.selectedProvider, '') as ISolution;
    fn.Main();
  }

  createInjector() : Injector{
    return Injector.create({
      providers: solutions.SolutionProvider,
      parent: this.injector
    });
  }

  onSelectionChange(event: any) : void {
    this.callSolution();
  }
}
