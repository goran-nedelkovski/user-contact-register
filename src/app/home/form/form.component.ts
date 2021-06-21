// import { Component, OnInit, Input } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
// //import { FormBuilder } from '@angular/forms';


// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   contactForm: FormGroup;
//   constructor() {
//   }

//   ngOnInit() {
//     this.contactForm = new FormGroup({        // because the is of type FormGroup, we create a new form with FormGrop constructor. inside we specify the js object with controls(key:value pairs)

//       'firstName': new FormControl(null, Validators.required), //null or ''(empty string)         // the FormControl() can contain 3 arguments. 1st is the value od the control(input), 2nd is the potencional single Validator, 3rd is the Async Validators potencional
//       'lastName': new FormControl(null, Validators.required),
//       'email': new FormControl(null, [Validators.required, Validators.email]),
//       'phone': new FormControl(null, Validators.required) // def a default gender to be male.

//     });
//   }

//   onSubmit() {
//     if (this.contactForm.valid) {
//       console.log(this.contactForm.value);
//     }
//   }


// }
