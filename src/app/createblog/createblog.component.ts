import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-createblog',
  templateUrl: './createblog.component.html',
  styleUrls: ['./createblog.component.css']
})
export class CreateblogComponent{


  constructor(private data : DataService){}

  onSubmit(myform: NgForm) {
    if (myform.valid) {
      this.data.DataList.unshift({ id: myform.value.title, name: myform.value.Desc })
      myform.reset()
    }
    else{
      console.log("not valid")
    }
    
  }


}
