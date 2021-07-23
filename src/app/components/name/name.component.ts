import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserNameStorageService } from 'src/app/shared/services/user-name-storage.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(
    private router: Router,
    private storage: UserNameStorageService) { }

  ngOnInit(): void {
  }

  saveUserName(nameForm: NgForm): void {
    if (nameForm.value.name) {
      this.storage.setUserName(nameForm.value.name);
      this.router.navigate(['/']);
    }
  }

}
