import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { HeroesService } from '../services/heroes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor( private auth: HeroesService,
    private router: Router) {}

canActivate(): boolean  {

if ( this.auth.estaAutenticado() ) {
return true;
} else {
this.router.navigateByUrl('/login');
return false;
}

}
}
