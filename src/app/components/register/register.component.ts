import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
    paises = ["cordoba"];
    provincias = ["cordoba"]

    registerForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{2,254}')]),
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9_-]{4,20}')]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      address: new FormGroup({
        country: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required)
      })
    })

    name = this.registerForm.get('name');
    lastName= this.registerForm.get('lastName');
    username= this.registerForm.get('username');
    password= this.registerForm.get('password');
    confirmPassword= this.registerForm.get('confirmPassword');
    country= this.registerForm.get('adress.country');
    city= this.registerForm.get('city'); 
    
    singUp(){
      const data = {
        userName: this.username.value,
        nombre: this.name.value,
        apellido: this.lastName.value,
        password: this.password.value,
        ciudad_id: this.city.value
      }
    } 

  constructor( 
    private _usersService: UsersService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
