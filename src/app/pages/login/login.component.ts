import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  selectedValue!: string;
  authService = inject(AuthService);
  onLogin(){
    this.authService.login(this.selectedValue);
    console.log(`current role is ${this.authService.selectedRole}`);
  }
}
