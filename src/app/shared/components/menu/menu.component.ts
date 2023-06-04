import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

    ngOnInit() {
        this.menuItems = [
          {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'textos y fechas',
                icon: 'pi pi-align-left',
                routerLink:"/",
              },
              {
                label: 'Números',
                icon: 'pi pi-sort-numeric-up',
                routerLink:"/numbers",
              },
              {
                label: 'No comunes',
                icon: 'pi pi-th-large',
                routerLink:"/uncommon",
              },
            ]
          },
          {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Otro elemento',
                icon: 'pi pi-plus-circle'
              }
            ]
          }


        ];
    }

}
