import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import * as MapboxDraw from '@mapbox/mapbox-gl-draw';

import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import MapboxDraw from '@mapbox/mapbox-gl-draw';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map!: mapboxgl.Map;
  draw: any;


  constructor() { }
  ngOnInit(): void {
    this.initializeMap()

  }

  private initializeMap() {

    // Add your Mapbox access token here
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.publicAccessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [74.3587, 31.5204],
      zoom: 9
    });

    this.createMarker(74.3587,31.5204);

  }

  createMarker(lng : number, lat:number){

    const marker = new mapboxgl.Marker({
      draggable : true
    }).setLngLat([lng,lat])
    .addTo(this.map);
  }



}



