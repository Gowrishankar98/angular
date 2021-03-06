import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  contactForm= new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })
  onSubmit() {
    console.log(this.contactForm.value);
  }
  ngOnInit(): void {
  }

}
