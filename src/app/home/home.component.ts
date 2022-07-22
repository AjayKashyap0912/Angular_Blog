import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  
  constructor(private data: DataService) { }
  ViewData = this.data.DataList;

  some!: string;
  some2!: string;
  condition = false;

onNotify(data:{id:string,name:string}){
  this.some = data.id;
  this.some2 = data.name;
  this.condition=true;
}
hide(){
  this.condition=false;
}


}

