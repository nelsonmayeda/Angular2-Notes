export class AppService{
    getNotes(){
        return [
          {
                title:"Input Property",
                description:"some.component.ts",
                note: "import {Input} from 'angular2/core'"
            } ,
          {
                title:"Using Input",
                description:"app.component.ts",
                note: `import {SomeComponent} from 'angular2/core'
<appcomponent [someAlias]="true"></appcomponent>`
            }  
        ];
    }
}