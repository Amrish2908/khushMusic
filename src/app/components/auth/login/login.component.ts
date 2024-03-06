import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginMode: boolean = true
  // Form!: FormGroup;
  error: any;
  errMsgs:any

  ngOnInit(){

  }

  onModeSwitch() {
    this.loginMode = !this.loginMode
    // this.Form.reset()
  }

}
