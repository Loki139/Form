import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  personal: FormGroup;
  company: FormGroup;
  test1:string;
  isLinear = true;
  submitted = false;
  submitted2 = false;

  

  constructor(private _formBuilder: FormBuilder,private toastr: ToastrService) {

    // let formValue = JSON.parse(localStorage.getItem('personal'))
    if(this.submitted == true && this.submitted2 == true)
    {
      this.isLinear = false;
    }
    else
    {
      this.isLinear = true;
    }
  }


  ngOnInit() {
    this.personal = this._formBuilder.group({
      fullName: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      state: new FormControl('',Validators.required),
      mobileNumber: new FormControl('', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    });
    this.company = this._formBuilder.group({
      companyName: new FormControl('',Validators.required),
      emailId: new FormControl('', [Validators.required,Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]),
      jobTitle: new FormControl('',Validators.required),
      experience: new FormControl('',Validators.required),
    });
    
  }
  get f(){
    return this.personal.controls;
  }
  get f2(){
    return this.company.controls;
  }
  peresonal(){
    console.log(this.personal.value);
    // this.isLinear = false;
    this.submitted = true;
    localStorage.setItem('personal', JSON.stringify(this.personal.value));
  }
  commpany(){
    console.log(this.company.value);
    localStorage.setItem('company', JSON.stringify(this.company.value));
    this.submitted2 = true;
    this.personal.reset();
    this.company.reset();
  }
  
}
