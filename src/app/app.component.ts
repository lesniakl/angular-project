import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private router: Router = inject(Router);
  activeTab?: string = '/';

  onMenuClick(route: string) {
    this.router.navigate([route]);
    this.activeTab = route;
  }
  onButtonClick() {
    console.log(this.router.url);
  }
}
