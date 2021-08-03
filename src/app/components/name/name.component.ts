import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserNameStorageService } from 'src/app/shared/services/user-name-storage.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit, AfterViewInit {

  @ViewChild('name', { static: false }) inputEl!: ElementRef;

  constructor(
    private router: Router,
    private storage: UserNameStorageService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputEl.nativeElement.focus();
  }

  saveUserName(nameForm: NgForm): void {
    if (nameForm.value.name) {
      this.storage.setUserName(nameForm.value.name);
      this.router.navigate(['/']);
    }
  }

}
