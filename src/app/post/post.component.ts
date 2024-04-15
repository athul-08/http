import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  forms3!:FormGroup;
  public postfrm=[];
userId: any;
title: any;
id: any;
  constructor(private _http:HttpService,private _fb:FormBuilder){}
  ngOnInit(){
    this.forms3=this._fb.group({
numbers:new FormControl('',Validators.required),

    })

}
pst(userId:number,id:number,title:string)
{
  this._http.postdetails(userId,id,title).subscribe((res: any)=>{this.postfrm=res});

}
}