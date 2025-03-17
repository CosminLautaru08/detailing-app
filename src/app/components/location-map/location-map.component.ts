import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import * as L from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-location-map',
  imports: [IonicModule],
  templateUrl: './location-map.component.html',
  styleUrls: ['./location-map.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LocationMapComponent implements AfterViewInit {
  services = [
    {
      id: 1,
      title: 'Spălare Premium',
      images: ['assets/wash1.jpg', 'assets/wash2.jpg'],
      description: 'O spălare profesională a exteriorului și interiorului.',
      features: [{ icon: 'water-outline', text: 'Presiune ridicată' }],
      duration: '45 min',
      pricing: [{ icon: 'cash-outline', type: 'Standard', price: '50 RON' }],
    },
    // Add more services as needed
  ];
  @ViewChild('map', { static: false }) mapContainer!: ElementRef;
  private map!: L.Map;

  constructor(private toastController: ToastController) {}

  ngAfterViewInit(): void {
    setTimeout(() => this.initializeMap(), 0); // Ensure DOM is ready
  }

  private initializeMap(): void {
    // Initialize the map centered at Timișoara
    this.map = L.map(this.mapContainer.nativeElement, {
      center: [45.758, 21.2281], // Timișoara Center
      zoom: 12,
    });

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
      detectRetina: true,
    }).addTo(this.map);

    // Define the coordinates for Timișoara and Biled
    const startCoords: L.LatLng = L.latLng(45.758, 21.2281); // Timișoara center
    const endCoords: L.LatLng = L.latLng(
      45.889223558376045,
      20.963700824911204
    ); // Biled, Timis

    // Create the routing control
    const control = L.Routing.control({
      waypoints: [startCoords, endCoords],
      routeWhileDragging: true, // Allows the user to drag the route
      geocoder: null, // Disable geocoding search
      lineOptions: {
        styles: [
          { color: 'blue', weight: 5, opacity: 0.7 }, // Route line style
        ],
        extendToWaypoints: false,
        missingRouteTolerance: 0,
      },
    }).addTo(this.map);

    const emptyIcon = L.divIcon({
      className: 'empty-icon', // Can be used for further customization
      iconSize: [1, 1], // Invisible size (effectively 1x1px)
      iconAnchor: [0, 0], // Anchor at the top-left (or wherever you like)
    });

    // Manually add custom markers for the start and end points with custom icons
    const startMarker = L.marker(startCoords, { icon: emptyIcon })
      .addTo(this.map)
      .bindPopup('Start: Timișoara');
    const endMarker = L.marker(endCoords, { icon: emptyIcon })
      .addTo(this.map)
      .bindPopup('End: Biled');

    // Display the duration in the popup when the route is found
    control.on('routesfound', (e: any) => {
      // Get the duration from the route summary (in seconds)
      const duration = e.routes[0].summary.totalTime / 60; // Duration in minutes

      // Create and display the popup at the start point with the duration
      L.popup({ autoClose: false }) // Disable auto-close for this popup
        .setLatLng(startCoords) // Position the popup at the start coordinates
        .setContent(
          `Durata călătoriei din centrul </br> Timișoarei până în Biled este de ${duration.toFixed(
            0
          )} minute.`
        ) // Display the duration in Romanian
        .openOn(this.map);

      // Create and display the popup at the end point with the location description
      L.popup({ autoClose: false }) // Disable auto-close for this popup
        .setLatLng(endCoords) // Position the popup at the end coordinates
        .setContent(`Locația atelierului de detailing din Biled.`) // Description for the end location in Romanian
        .openOn(this.map);
    });
  }

  async copyAddress() {
    await navigator.clipboard.writeText('Strada Exemplu, Nr. 10, Timișoara');

    const toast = await this.toastController.create({
      message: 'Adresă copiată!',
      duration: 3000, // 3 seconds (you can set it to 5000 or more)
      position: 'top', // Can be 'top', 'middle', or 'bottom'
      cssClass: 'custom-toast', // Optional: Custom styling
    });

    await toast.present();
  }
}
