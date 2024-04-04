import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
      }
    )
  };

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  // Get user session
  async getSession() {

    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    const session = {
      email: 'john.doe@mail.com'
    };

    return false;
    // return session;
  }

  // Sign in
  async signIn(userName: string, password: string) {
    // Sample only - remove this after real authentication / session
    // const sample_user = {
    //   userName,
    //   password
    // };

    return this.http.post(environment.baseURL + 'Login?userName=' + userName + '&password=' + password, this.httpOptions);
    // return sample_user;
  }

  // Sign up
  async signUp(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    const sample_user = {
      email,
      password
    };

    return sample_user;
  }

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...
console.log('signOut')
    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
  }
}
