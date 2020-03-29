import { Component } from '@angular/core';
import { Owner } from '../owner';
import { FormGroup, FormBuilder } from  '@angular/forms';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.css']
})
export class OwnerFormComponent {
  checkinForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  createContactForm() {
    this.checkinForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      areaCode1: [''],
      areaCode2: [''],
      phone3: [''],
      phone4: [''],
      MicoID: [''],
      email: ['']
    });
  }

  onSubmit() {
    const firstname = this.checkinForm.value.firstName;
    const lastname = this.checkinForm.value.lastName;
    const phone = this.checkinForm.value.areaCode1 + this.checkinForm.value.areaCode2 + this.checkinForm.value.phone3 + this.checkinForm.value.phone4;
    const email = this.checkinForm.value.email;
    const MicroID = this.checkinForm.value.MicoID;
    console.log('first name : ', firstname);
    console.log('lastname : ', lastname);
    console.log('phone : ', phone);
    console.log('email : ', email);
    console.log('Microchip Number : ', MicroID);
  }
}

// TODO: Remove this when done
  // get diagnostic() { return JSON.stringify(this.model); }


