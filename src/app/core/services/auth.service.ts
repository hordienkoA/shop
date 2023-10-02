import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedRole!: string;

  login(role: string){
    this.selectedRole = role;
  }

  roleCheck(role: string): boolean{
    return this.selectedRole.toLowerCase() === role.toLowerCase();
  };
}
