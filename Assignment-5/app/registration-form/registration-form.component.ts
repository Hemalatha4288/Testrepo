import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
    user = {
      firstName: '',
      lastName: ''
      // Add more properties as needed
    };
  
    onSubmit() {
      console.log('Form submitted:', this.user);
      // Add logic to submit the form data
    }
  }


