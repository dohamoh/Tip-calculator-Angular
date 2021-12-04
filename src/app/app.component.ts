import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CV2';
  // infoForm: FormGroup | undefined;

  // constructor(private fb: FormBuilder) {
  //   this.createForm();
  // }
  //  createForm() {
  //   this.infoForm = this.fb.group({
  //      name: ['', Validators.required, Validators.min(1) ]
  //   });
  // }
}
