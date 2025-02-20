import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; // Import Router here
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-services',
  standalone: true, // Make sure the component is standalone
  imports: [IonicModule, CommonModule], // Include Router in imports
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeServicesComponent implements OnInit {
  services = [
    {
      id: 1,
      image: 'detailing-exterior.jpg',
      title: 'Detailing Exterior',
    },
    {
      id: 2,
      image: 'detailing-interior-v2.jpg',
      title: 'Detailing Interior',
    },
    {
      id: 3,
      image: 'ceramic-ultra-version-2.jpg',
      title: 'Protectie ceramica',
    },
    {
      id: 4,
      image: 'colantare-exterior.jpg',
      title: 'Colantare Exterior cu Folie Skyfol',
    },
    {
      id: 5,
      image: 'polish-faruri.jpg',
      title: 'Polishare Faruri',
    },
    {
      id: 6,
      image: 'detailing-jante.jpg',
      title: 'Detailing Jante',
    },
  ];

  constructor(private router: Router) {} // Add Router to constructor for navigation

  ngOnInit() {}
}
