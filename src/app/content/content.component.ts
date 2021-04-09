import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  showAlert(){
    alert('Account is Created successfully.')
    }

  constructor() { }

  ngOnInit(): void {
  }

}
