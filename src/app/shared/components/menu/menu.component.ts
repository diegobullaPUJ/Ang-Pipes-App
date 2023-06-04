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
            icon: 'pi pi-angle-double-down',
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
            icon: 'pi pi-arrow-circle-down',
            items: [
              {
                label: 'Custom pipes',
                icon: 'pi pi-sliders-h',
                routerLink:"/custom"
              }
            ]
          }


        ];
    }

}
