import { Component } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent {
  
  //DI in Angular
  constructor(private e1:ElementRef,private ren:Renderer2)
   {
      // this.changeTextColor("red");
   }
 

   @HostListener ('mouseenter')mouseHovered() {
     this.changeTextColor('red');
   }


   @HostListener('mouseleave')mouseAway() {
    this.changeTextColor('cyan');
   }



    changeTextColor(mycolor:string)
    {
 this.ren.setStyle(this.e1.nativeElement,'color',mycolor)
    }


}

}
