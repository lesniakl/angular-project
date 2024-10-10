import { Component } from '@angular/core';
import { PlaceholderService } from '../services/placeholder.service';
import { USER } from '../services/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  data: any;
  users: USER[] = [];
  constructor(private PlaceholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.PlaceholderService.getData().subscribe((response) => {
      this.data = response;
      response.forEach((user: any) => {
        this.users.push({
          name: user.name,
          username: user.username,
          email: user.email,
          city: user.address.city,
          phone: user.phone,
          website: user.website,
        });
      });
      console.log(this.users);
    });
  }
}
