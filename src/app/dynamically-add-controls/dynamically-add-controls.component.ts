import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamically-add-controls',
  templateUrl: './dynamically-add-controls.component.html',
  styleUrls: ['./dynamically-add-controls.component.scss']
})
export class DynamicallyAddControlsComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames: Array<string> = ["Chris", "Anna"];

  ngOnInit() {
    //called before template is rendered
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl("female"),
      'hobbies': new FormArray([])

    })
  }

  onSubmit() {
    console.log("submitted!", this.signupForm)
  }
  onAddHobbies() {
    console.log("add hobby")
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  //create a custom validator
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    //{ [s: string]: boolean }
    //get an object with any number of keys that are
    //of type strings
    //that must be equal to a boolean
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { "nameIsForbidden": true }
    }
    //if validation is successful pass back null
    //although paassing nothing back would work
    return null;

  }

}
