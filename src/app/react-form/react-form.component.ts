import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrls: ['./react-form.component.css']
})
export class ReactFormComponent implements OnInit{

constructor(private fb: FormBuilder){}

  toggle = false

  login: any
  passwrd: any
  

start(){
  this.toggle = !this.toggle
}

  form: FormGroup | any

  formFB: FormGroup | any
  name: FormControl | any
  hobbie: FormArray | any
  lastName: FormControl | any
  phone: FormControl | any
  agree: FormControl | any

  ngOnInit(): void {
  this.form = new FormGroup({
    login2: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  })
  this.createFormControls()
  this.createForm()
  }


createFormControls(){
  this.name = ['', [Validators.required]]
  this.lastName = ['', [Validators.required, Validators.minLength(4)]]
  this.phone = ['', [Validators.required, Validators.minLength(7)]]
  this.agree = ['', [Validators.requiredTrue]]

  this.hobbie = this.fb.array([
    this.fb.control(''),
  ])
}

  createForm(){
    this.formFB = this.fb.group({
      name : this.name,
      hobbie: this.hobbie,
      lastName: this.lastName,
      phone: this.phone,
      agree: this.agree
    })
  }

  addHobbie(){
    this.hobbie.push(this.fb.control(''))
  }
  deleteHobbie(){
    this.hobbie.clear()
  }



  onSubmit(data:any){
    console.log(data);
    this.formFB.reset()
  }



}
