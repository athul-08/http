import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators,} from '@angular/forms';
import { HttpService } from '../http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './get.component.html',
  styleUrl: './get.component.scss'
})
export class GetComponent {
  forms2!:FormGroup;
  public view:any=[];
 
  public disp=false;
  public disp2=false;
num: any;
  constructor(private _http:HttpService,private _fb:FormBuilder){}
  ngOnInit(){
    this.forms2=this._fb.group({
numbers:new FormControl('',Validators.required),

    })
  }
  getall(){
    this._http.getdetails().subscribe((res: any)=>{this.view=res});
  //  console.log(this.view)
    this.disp=true;
  }
  getspec(num:number)
  {
    // console.log(num)
    this._http.getdetailsspecific(num).subscribe((res: any)=>{this.view=res});
    console.log(this.view);
    this.disp2=true;
  }
}