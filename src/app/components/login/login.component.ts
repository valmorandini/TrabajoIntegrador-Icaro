import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginError = false;

  loginForm = this.fb.group({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),  
  })

  username= this.loginForm.get('username');
  password= this.loginForm.get('password');
  
  singIn() {
    const data = {
      userName: this.username.value,
      password: this.password.value
    }
    this._usersService.login(data).subscribe((res:any) =>{
      console.log(res);
      localStorage.setItem('token', res.token);
      this._usersService.loggedIn.next(true);
      this.router.navigate(['/']);
    }, err => {
      console.log('incorrecto')
      this.loginError = true
    })
  }

  constructor(
    private _usersService: UsersService,private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

}
