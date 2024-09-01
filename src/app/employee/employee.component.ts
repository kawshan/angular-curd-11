import {Component, OnInit} from '@angular/core';
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption, MatSelect} from "@angular/material/select";
import {EmployeeModel} from "../model/employee.model";
import {FormsModule, NgForm} from "@angular/forms";
import {EmployeeService} from "../employee.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatIconButton,
    MatToolbar,
    MatIcon,
    MatFabButton,
    RouterLink,
    MatFormField,
    MatInput,
    MatRadioGroup,
    MatLabel,
    MatRadioButton,
    MatSelect,
    MatOption,
    FormsModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employee:EmployeeModel={
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""
  }

  constructor(private employeeService: EmployeeService,private router:Router) {}

  ngOnInit(): void {}


  selectGender(gender:string):void{
    this.employee.employeeGender=gender;
  }


  saveEmployee(employeeForm:NgForm):void {
    this.employeeService.saveEmployee(this.employee).subscribe({
      next:(res:EmployeeModel)=>{
        console.log(res);
        this.employee.employeeGender='';
        employeeForm.reset();
        this.router.navigate(["/employee-list"]);
      },
      error:(res:HttpErrorResponse)=>{
        console.log(res);
      }
    })
  }



}
