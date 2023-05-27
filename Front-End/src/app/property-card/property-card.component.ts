import { Component } from "@angular/core";



@Component(
  {
    selector: 'app-property-card',
    templateUrl: 'property-card.component.html',
    styleUrls: ['property-card.component.css']
  }
)

export class PropertyCardComponent{

  Property: any={
    "name":"Birla Home",
    "id":1,
    "type":"House",
    "price":12000
  }

}
