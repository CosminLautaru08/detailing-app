import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  callOutline,
  mailOutline,
  locationOutline,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoTiktok,
} from 'ionicons/icons';

@Component({
  selector: 'app-footer',
  imports: [IonicModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  callOutline = callOutline;
  mailOutline = mailOutline;
  locationOutline = locationOutline;
  logoFacebook = logoFacebook;
  logoInstagram = logoInstagram;
  logoTwitter = logoTwitter;
  logoTiktok = logoTiktok;
  constructor() {}

  ngOnInit() {}
}
