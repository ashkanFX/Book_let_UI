import {Component} from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  sidebarVisible: boolean = false;
  items = [
    {
      label: 'Author',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'operation',
          icon: 'pi pi-fw pi-pencil',
          routerLink: '/admin/author/form'

        }, {
          label: 'list',
          icon: 'pi pi-fw pi-pencil',
          routerLink: '/admin/author'
        },

      ]
    }
  ];
}
