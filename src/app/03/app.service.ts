export class AppService{
    getNotes(){
        return [
          {
                title:"Property Binding",
                description:"",
                note: `@Component({<img [src]="someVar"/>})
<img bind-src="someVar"/>`
          },
          {
                title:"Expression Binding",
                description:"slower, possibly leaves binding expression on screen",
                note: `<img src="{{ someVar + anotherVar}}"/>
export class AppComponent{someVar = "www.image.com";anotherVar = "/xyz.png";}`
          },
          {
                title:"Class Binding",
                description:"",
                note: `<li [class.someClass]="someVar"/>`
          },
          {
                title:"Style Binding",
                description:"",
                note: `<button [style.background]="someVar"/>`
          },
          {
                title:"Event Binding",
                description:"",
                note: `<button (click)="someFunc($event)"/>
export class AppComponent{someFunc(e){}}`
          },
          {
                title:"Two-way Binding",
                description:"",
                note: `//note that ngModel has hardcoded directives for [value] and (input)
//essentially being <input type="text" [value]="someVar" (input)="someVar = $event.target.value"
<input type="text" [(ngModel)]="someVar"/>
<input type="text" bindon-ngModel="someVar"/>`
          }
      ];
    }
}