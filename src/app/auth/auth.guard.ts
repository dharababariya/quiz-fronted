import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(private router : Router){}

    canActivate(next : ActivatedRouteSnapshot,
                 state : RouterStateSnapshot) : boolean {
                   if(localStorage.getItem('participent') !=null)
                   return true;
                   this.router.navigate(['/register']);
                   return false;

    }

}
