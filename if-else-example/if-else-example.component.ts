import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-example',
  templateUrl: './if-else-example.component.html',
  styleUrls: ['./if-else-example.component.css']
})
export class IfElseExampleComponent {
  people:any[]=[
    {
      "name":"Tobia",
      "age":35
    },
    {
      "name":"Brad",
      "age":32
    },
    {
      "name":"Andy",
      "age":29
    },
  ];

}
