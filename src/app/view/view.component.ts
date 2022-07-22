import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() carddata!:[{id:string,name:string}];


  ngOnInit(): void {
  }

  @Output() notify:EventEmitter<{id:string, name:string}>= new EventEmitter<{id:string, name:string}>();
  do(){
    this.notify.emit({id:this.carddata[0].id, name:this.carddata[0].name})
  }

}
