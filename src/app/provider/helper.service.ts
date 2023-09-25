import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }


  loginHelper(formError:any,loginForm:any,validationMsg:any){
    for (const field in formError) {
      formError[field] = "";
      const control = loginForm.controls[field];
      if (control && control.invalid) {
          const objMsg = validationMsg[field];
        for (const key in control.errors) {
          formError[field] = formError[field] + objMsg[key] + " ";
        }
      }
    }
    return formError;
  }
}
