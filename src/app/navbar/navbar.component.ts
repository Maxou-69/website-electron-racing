import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  buttonnav = [
    {
      title: "Actualité",
      class: "button",
      redirect: "#",
    },
    {
      title: "Démarche",
      class: "button",
      redirect: "#",
    },
    {
      title: "Design",
      class: "button",
      redirect: "#",

    },
    {
      title: "Sponsor",
      class: "button",
      redirect: "#",

    }
  ]
}
