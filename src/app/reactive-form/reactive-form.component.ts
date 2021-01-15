import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  //<form [formGroup]="signupForm">
  //this tells ng to use OUR form group
  //and not to make one
  signupForm: FormGroup;

  ngOnInit() {
    //called before template is rendered
    this.signupForm = new FormGroup({
      //constrols for the form are key value pairs
      'username': new FormControl(null, Validators.required),
      //<input formControlName="username">
      //same as
      //<input [formControlName]="'username'"
      //connect the input to this control
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl("female")

    })
  }

  //<form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
  onSubmit() {
    console.log("submitted!", this.signupForm)
  }
}
