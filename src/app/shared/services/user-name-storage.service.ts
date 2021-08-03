import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserNameStorageService {

  constructor() { }

  setUserName(name: string): void {
    sessionStorage.setItem('name', name);
  }

  getUserName(): string | null {
    return sessionStorage.getItem('name');
  }
}
