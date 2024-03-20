import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  buttonnav = [
    {
      title: "Accueil",
      class: "button",
      redirect: "./",
    },
    {
      title: "Actualité",
      class: "button",
      redirect: "./news",
    },
    {
      title: "Démarche",
      class: "button",
      redirect: "./process",
    },
    {
      title: "Notre équipe",
      class: "button",
      redirect: "./team",
    },
    {
      title: "Design",
      class: "button",
      redirect: "./design",

    },
    {
      title: "Sponsors",
      class: "button",
      redirect: "./sponsor",

    },
    {
      title: "Contact",
      class: "button",
      redirect: "./contact",

    },
  ]
}
