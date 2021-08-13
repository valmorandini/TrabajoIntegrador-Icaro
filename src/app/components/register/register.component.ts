import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { PaisesService } from 'src/app/services/paises.service';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { UsersService } from 'src/app/services/users.service';
import { Paises, Ciudades } from 'src/app/shared/models/interface';
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
    paises: Paises[];
    ciudades: Ciudades[];

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
    city= this.registerForm.get('adress.city'); 
  
    singUp(){
      const data = {
        userName: this.username.value,
        nombre: this.name.value,
        apellido: this.lastName.value,
        password: this.password.value,
        ciudad_id: 1,
      }
      console.log(data)
      this._usersService.create(data).subscribe((res:any) =>{
        console.log(res);
        
        this.router.navigate(['login']);
      })

    } 

    buscarCiudades(id){
      const params = new HttpParams().set('pais_id', id)
      console.log(params);
      this._ciudadesService.getAll(params).subscribe((res) => {
        console.log(res);
        this.ciudades = res
        console.log(this.ciudades);
       
       })
    }

  constructor( 
    private _usersService: UsersService,
    private _paisesService: PaisesService,
    private _ciudadesService: CiudadesService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit(): void {
     this._paisesService.getAll().subscribe((res) => {
       console.log(res);
       this.paises = res;
      
      })
  }

}
