import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  //Define variable
  regForm: FormGroup;
  myname: string;
  mymobile: number;
  myemail: any;
  myaddress: any;
  allControllName: any;
  constructor(public formbuilder: FormBuilder) {
    this.setFormState();
  }

  ngOnInit() {}

  setFormState() {
    //Example 01
    // this.regForm = this.formbuilder.group({
    //   fname: new FormControl(),
    //   email: new FormControl(),
    //   mob: new FormControl(),
    //   address: new FormControl()
    // });
    //Instuial Value ke liye
    // this.regForm = this.formbuilder.group({
    //   fname: [""],
    //   email: [""],
    //   mob: [""],
    //   address: [""]
    // });

    //Form Validation Single
    // this.regForm = this.formbuilder.group({
    //   fname: ["", Validators.required],
    //   email: ["", Validators.required],
    //   mob: ["", Validators.required],
    //   address: ["", Validators.required]
    // });

    //Form Validation Compose

    this.regForm = this.formbuilder.group({
      fname: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ])
      ],
      email: ["", Validators.compose([Validators.required])],
      mob: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(13)
        ])
      ],
      address: ["", Validators.compose([Validators.required])]
    });
  }

  submitForm(formData) {
    console.log(formData.value);
    this.myname = formData.controls.fname.value;
    this.mymobile = formData.controls.mob.value;
    this.myemail = formData.controls.email.value;
    this.myaddress = formData.controls.address.value;
    this.allControllName = formData.value;
  }

  resetForm() {
    //this.regForm.reset();
    this.regForm.reset({
      fname: "Tarun chande bhatt",
      email: "tarunchanderbhatt@gmail.com",
      mob: 9999513370,
      address: "New Delhi"
    });
  }
}
