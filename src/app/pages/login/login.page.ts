import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/constants/loginFormConst';
import { HelperService } from 'src/app/provider/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: any;
  email: any;
  password: any

  formError: any = {
    email: "",
    password: ""
  }
  validationMsg: any = Login
  constructor(private fb: FormBuilder,private helperService: HelperService) {
    this.loginForm = FormGroup

  }

  ngOnInit() {
    this.createFormController();
    //this.createForm();
  }
  createFormController() {

    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.maxLength(5)]],
    })

    this.loginForm.valueChanges.subscribe((values: any) => {
      console.log(values),
        console.log(this.loginForm)
      this.formChangedData(values);

    }
    )
  }

  formChangedData(value: any) {
   
    this.helperService.loginHelper(this.formError,this.loginForm,this.validationMsg)
    console.log(this.formError, 'this.formError')
  }

}
