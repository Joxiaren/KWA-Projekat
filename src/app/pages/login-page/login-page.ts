import { Component, signal, WritableSignal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [ ReactiveFormsModule ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  form = new FormGroup({
    username: new FormControl("", Validators.minLength(8)),
    password: new FormControl("", Validators.minLength(8))
  });

  suppressError : WritableSignal<boolean> = signal(true);

  login(){
    
    console.log(this.form.value);
    this.suppressError.set(false);
  }

  hasInput(formControlName: string) : string{
    let value = this.form.get(formControlName)?.value;
    if(value != undefined && value != "") return "inputed";
    return "";
  }

  hasError(formControlName: string): string{
    if(this.suppressError()) return "";
    if(!this.form.get(formControlName)?.valid) return "erred";
    return "";
  }

  getError(formControlName: string): string{
    if(this.suppressError()) return "";
    if(!this.form.get(formControlName)?.valid ){
      return "I have an error :<";
    }

    return ""
  }
}
