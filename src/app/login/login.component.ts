import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  signin_form!: FormGroup;
  submit_attempt: boolean = false;
  user: any;

    constructor(private formBuilder: FormBuilder, private router: Router,
    private loadingController: LoadingController, private toastService: ToastService,
    private authService: AuthService, private dataService: DataService) { }

  ngOnInit() {
    // Setup form
    this.signin_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
    
  }

  // Sign in
  async signIn() {
console.log('Sign in');
    this.submit_attempt = true;

    // If email or password empty
    if (this.signin_form.value.email === '' || this.signin_form.value.password === '') {
      this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);

    } else {
      console.log('Sign In 1');
      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: 'Signing in...',
        spinner: 'crescent'
      });
      await loading.present();

      // TODO: Add your sign in logic
      // ...

      (await this.authService.signIn(this.signin_form.controls['email'].value,
      this.signin_form.controls['password'].value))
      .subscribe({
      next: (data: any) => {
        
        if(data === undefined || data?.['role_Priv'] === undefined)
        {
          console.log('data === undefined || data?.[role_Priv] === undefined');
          this.authenticationFailed('UserName and Password are incorrect');
          loading.dismiss();
        }
        console.log('data Result : ', data['role_Priv'].result);
        localStorage.setItem('user', data);
        localStorage.setItem('user-token', data.token);
        localStorage.setItem('AccessList', data['role_Priv'].result);
        this.dataService.userInfo.next(data);
        console.log(' localStorage.getItem(user): ',  localStorage.getItem('user'));
        
        this.router.navigate(['/farm/dashboard']);
        loading.dismiss();

      },
      error: ((error: any) =>  {
        this.authenticationFailed(error);
        loading.dismiss();
      })
    })
      ;

    }
    this.dataService.userInfo.subscribe((data: any) =>  {
      this.user = data;
      console.log('User info : ', this.user);
    });
  }

  authenticationFailed(error: any) {
    console.error(error);
    alert(error.message);
    this.router.navigate(['']);
  }

}
