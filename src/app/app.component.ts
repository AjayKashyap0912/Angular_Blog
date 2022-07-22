import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {


  constructor(private router: Router) {

  }
  
  goToIndex()
  {
    this.router.navigateByUrl('');
  }
  goToCreatBlog()
  {
    this.router.navigateByUrl('/creatblog');
  }
  goToManageBlog(){
    this.router.navigateByUrl('/manageblog');
  }
  
}



