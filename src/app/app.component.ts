import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserInfoComponent } from './components/user-info/user-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, UserInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dev_portal';
}
