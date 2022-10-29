import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent{

  constructor() { }

  adduserform = new FormGroup({
    Name:new FormControl('', Validators.required),
    Address : new FormControl('',Validators.required),
    EmailId:new FormControl('',Validators.required),
    Phone : new FormControl('')
  })
  onSubmit(){
    console.log("submitted")
  }
}
