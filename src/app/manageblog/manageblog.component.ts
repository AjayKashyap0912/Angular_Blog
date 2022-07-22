import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-manageblog',
  templateUrl: './manageblog.component.html',
  styleUrls: ['./manageblog.component.css']
})
export class ManageblogComponent {
  constructor(private data : DataService){}
  BlogList = this.data.DataList;
  count = 1;

  Pclick(index:number){
      this.BlogList.splice(index, 1);

  }
  Pclick1(){
  
  }
  Pclick2(){
  
  }
  
}

