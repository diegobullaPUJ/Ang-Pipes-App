import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'diego bulla'
  public nameUpper: string = 'DIEGO BULLA'
  public fullName: string = 'diEGo BuLla'
  public customDate: Date = new Date();

}
