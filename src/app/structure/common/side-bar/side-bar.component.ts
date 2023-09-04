import { Component } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  sidebarVisible: boolean = false;
  items = [
    {
      label: 'Admin panel',
      items: [
        {
          label: 'author',
          icon: 'pi pi-user-plus',
          routerLink: '/admin/author'
        },
        {
          label: 'Router',
          icon: 'pi pi-upload',
          routerLink: '/fileupload'
        },
        {
          label: 'view Page',
          icon: 'pi pi-caret-right',
          routerLink: '/view'
        }
      ]
    }
  ]
}
