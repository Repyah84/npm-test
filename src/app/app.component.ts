import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'npm-test';

  public btnToggleValue: unknown;

  public readonly toggleValueList = [
    {
      id: 1,
      value: 'first',
    },
    {
      id: 2,
      value: 'second',
    },
    {
      id: 3,
      value: 'trd',
    },
  ];
}
