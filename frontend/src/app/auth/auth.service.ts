import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private localStorageService;

  constructor(private http:HttpClient, private jwtHelper:JwtHelperService, private router:Router) {
    this.localStorageService = localStorage;
  }

  login(credentials:any) {
    return this.http.post(`${environment.API_URL}auth/signin`, credentials);
  }

  logout() {
    this.eraseToken();
    return this.router.navigate(['login']);
  }

  storeToken(data:any) {
    this.localStorageService.setItem('access-token', JSON.stringify(data.token));
  }

  eraseToken() {
    this.localStorageService.removeItem('access-token');
  }

  isLoggedIn() {
    const token = this.localStorageService.getItem('access-token');
    if(token) 
    {
      try {
        return !this.jwtHelper.isTokenExpired(token);
      } 
      catch(error:any) {
        console.log(error);
      }
    }
    return false;
  }
}
