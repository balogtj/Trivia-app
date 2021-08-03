import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserNameStorageService } from '../services/user-name-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnnamedUserGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: UserNameStorageService) { }

  canActivate(): boolean | UrlTree {
    return this.storage.getUserName() ? true : this.router.createUrlTree(['name']);
  }

}
