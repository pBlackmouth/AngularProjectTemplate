import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  getFormValue(formGroup:FormGroup, controlName: string) {
    let value = null;

    if(formGroup)
      value = formGroup.get(controlName).value;

    return value;
  }
}
