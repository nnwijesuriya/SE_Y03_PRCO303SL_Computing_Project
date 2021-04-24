import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private login: LoginService)
  {

  }

  canActivate(route : ActivatedRouteSnapshot){
    const expectedRole = route.data.role
    return this.login.user.pipe(
      take(1),
      map(user => {
        if(user.email != null)
        {
          let role = user['role'];
          if(expectedRole == role)
          {
            return  true;
          }else if(role == "managers")
          {
            return this.router.parseUrl('/managers/dashboard')
          }else{
            return this.router.parseUrl('/employees/dashboard')
          }
        }else{
        return this.router.parseUrl('/login')
        }
      })
    )
  }
}
