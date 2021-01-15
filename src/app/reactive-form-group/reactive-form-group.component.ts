import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-group',
  templateUrl: './reactive-form-group.component.html',
  styleUrls: ['./reactive-form-group.component.scss']
})
export class ReactiveFormGroupComponent implements OnInit {
  genders = ['male', 'female'];
  //<form [formGroup]="signupForm">
  //this tells ng to use OUR form group
  //and not to make one
  signupForm: FormGroup;

  ngOnInit() {
    //called before template is rendered
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl("female")

    })
  }

  //<form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
  onSubmit() {
    console.log("submitted!", this.signupForm)
  }
}
