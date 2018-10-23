import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {  
  //@Input('NavBarTitle') NavBarTitle: string;
  @Input() NavBarTitle: string;

  
  
  constructor() { 
    
  }

  ngOnInit() {
    
  }

}
