import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  
  logout() {
    localStorage.removeItem('token');
    this._usersService.loggedIn.next(false);
    this.router.navigate(['/']);
  }
  
  constructor(
    public _usersService: UsersService,
    private router: Router
  
    ) { }

  ngOnInit(): void {
    this._usersService.isLogged.subscribe( res => this.isLogged = res)
  }

}
