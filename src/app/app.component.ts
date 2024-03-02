import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular-quickstart';

  projectStates: { [key: string]: boolean } = {};

  handleCollapseButton(projectId: string) {
    this.projectStates[projectId] = !this.projectStates[projectId];
  }
}
