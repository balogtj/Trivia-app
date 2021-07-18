import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInputStorageService } from '../services/user-input-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NamedUserGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: UserInputStorageService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.storage.getUserName() ? false : true;
  }
}
