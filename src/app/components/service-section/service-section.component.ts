import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-service-section',
  imports: [IonicModule, CommonModule],
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None,
})
export class ServiceSectionComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  swiperModules = [IonicSlides];
  services = [
    {
      id: 1,
      title: 'Detailing Exterior',
      description: 'Descriere',
      images: ['detailing-exterior.jpg', 'detailing-exterior.jpg'],
      features: [
        {
          icon: 'sparkles-outline',
          text: 'Decontaminare chimică și mecanică a vopselei',
        },
        {
          icon: 'color-filter-outline',
          text: 'Corecție lac (polish 1-3 etape, în funcție de gradul defectelor)',
        },
        {
          icon: 'cut-outline',
          text: 'Eliminare zgârieturi fine și imperfecțiuni',
        },
      ],
      duration: '2-3 zile',
      pricing: [
        { icon: 'car-outline', type: 'Mașini / Sedan', price: '1200-1500 RON' },
        { icon: 'car-sport-outline', type: 'SUV-uri', price: '1500-2000 RON' },
      ],
    },
    {
      id: 2,
      title: 'Detailing Interior',
      description: 'Descriere',
      images: ['detailing-interior-v2.jpg'],
      features: [
        { icon: 'broom-outline', text: 'Aspirare covorașe, scaune și mochetă' },
        { icon: 'layers-outline', text: 'Curățare bord, vinil și scaune' },
        {
          icon: 'filter-outline',
          text: 'Curățare guri de aerisire și panouri uși',
        },
        {
          icon: 'glasses-outline',
          text: 'Curățare și igienizare consolă centrală și suporturi pentru pahare',
        },
        {
          icon: 'shirt-outline',
          text: 'Curățare tapiserie din material textil sau piele',
        },
        {
          icon: 'sparkles-outline',
          text: 'Aplicare tratament de protecție pentru scaune din piele (dacă este cazul)',
        },
        {
          icon: 'shield-checkmark-outline',
          text: 'Dezinfectare habitaclu și igienizare sistem de climatizare',
        },
      ],
      duration: '1-2 zile',
      pricing: [
        { icon: 'car-outline', type: 'Mașini / Sedan', price: '800-1500 RON' },
        { icon: 'car-sport-outline', type: 'SUV-uri', price: '1200-2000 RON' },
      ],
    },
    {
      id: 3,
      title: 'Protecție ceramică',
      description: 'Descriere',
      images: ['ceramic-ultra-version-2.jpg'],
      features: [
        {
          icon: 'shield-checkmark-outline',
          text: 'Protecție durabilă: Strat rezistent ce protejează vopseaua de zgârieturi și contaminanți.',
        },
        {
          icon: 'water-outline',
          text: 'Tehnologie hidrofobă: Respinge apa și murdăria, ușurând curățarea.',
        },
        {
          icon: 'sunny-outline',
          text: 'Rezistență UV: Previne decolorarea vopselei din cauza soarelui.',
        },
        {
          icon: 'hourglass-outline',
          text: 'Durabilitate pe termen lung: Protecție până la 5 ani.',
        },
        {
          icon: 'flask-outline',
          text: 'Rezistență chimică: Protejează împotriva petelor de apă și contaminanților agresivi.',
        },
      ],
      duration: '1 zi',
      pricing: [
        { icon: 'car-outline', type: 'Mașini / Sedan', price: '1000-1500 RON' },
        { icon: 'car-sport-outline', type: 'SUV-uri', price: '1500-2000 RON' },
      ],
    },
    {
      id: 4,
      title: 'Colantare Exterior cu Folie Skyfol',
      description: 'Descriere',
      images: ['colantare-exterior.jpg'],
      features: [
        {
          icon: 'shield-checkmark-outline',
          text: 'Protecție avansată: Folie Skyfol rezistentă la zgârieturi și impacturi mici.',
        },
        {
          icon: 'sunny-outline',
          text: 'Rezistență UV: Previne decolorarea vopselei, păstrând aspectul mașinii.',
        },
        {
          icon: 'water-outline',
          text: 'Reducerea murdăriei: Oferă protecție împotriva prafului și apei.',
        },
        {
          icon: 'color-wand-outline',
          text: 'Personalizare: Posibilitate de colantare totală sau parțială.',
        },
        {
          icon: 'hourglass-outline',
          text: 'Durabilitate ridicată: Protecție de până la 5 ani (în funcție de utilizare).',
        },
      ],
      duration: '3-5 zile',
      pricing: [
        { icon: 'car-outline', type: 'Mașini / Sedan', price: '5000-7000 RON' },
        { icon: 'car-sport-outline', type: 'SUV-uri', price: '7000-9000 RON' },
      ],
    },
    {
      id: 5,
      title: 'Polishare Faruri',
      description: 'Descriere',
      images: ['polish-faruri.jpg'],
      features: [
        {
          icon: 'eye-outline',
          text: 'Restaurare faruri: Elimină opacitatea și îmbunătățește claritatea.',
        },
        {
          icon: 'sunny-outline',
          text: 'Protecție UV: Previne îngălbenirea și deteriorarea cauzată de expunerea la soare.',
        },
        {
          icon: 'shield-checkmark-outline',
          text: 'Folie de protecție Skyfol: Protejează împotriva zgârieturilor și contaminanților.',
        },
        {
          icon: 'brush-outline',
          text: 'Ușurință în întreținere: Menține farurile clare și ușor de curățat.',
        },
        {
          icon: 'hourglass-outline',
          text: 'Durabilitate crescută: Protecție de până la 3 ani oferită de producător.',
        },
      ],
      duration: '4-6 ore',
      pricing: [
        { icon: 'car-outline', type: 'Mașini / Sedan', price: '300-600 RON' },
        { icon: 'car-sport-outline', type: 'SUV-uri', price: '400-700 RON' },
      ],
    },
    {
      id: 6,
      title: 'Detailing Jante',
      description: 'Descriere',
      images: ['detailing-jante.jpg'],
      features: [
        {
          icon: 'water-outline',
          text: 'Curățare completă: Îndepărtarea murdăriei, prafului de frână și resturilor.',
        },
        {
          icon: 'shield-checkmark-outline',
          text: 'Protecție avansată: Aplicare de soluție de protecție pentru un finisaj lucios și durabil.',
        },
        {
          icon: 'color-wand-outline',
          text: 'Rezistență la murdărie: Straturi care previn depunerea de murdărie și praf pe jante.',
        },
        {
          icon: 'sunny-outline',
          text: 'Protecție UV: Previne decolorarea și îmbătrânirea jantelor datorită expunerii la soare.',
        },
        {
          icon: 'hourglass-outline',
          text: 'Durabilitate crescută: Protecție pe termen lung, până la 6 luni, în funcție de condițiile de utilizare.',
        },
      ],
      duration: '1-2 ore',
      pricing: [
        { icon: 'car-outline', type: 'Mașini / Sedan', price: '200-400 RON' },
        { icon: 'car-sport-outline', type: 'SUV-uri', price: '300-500 RON' },
      ],
    },
  ];

  ngOnInit(): void {}
}
