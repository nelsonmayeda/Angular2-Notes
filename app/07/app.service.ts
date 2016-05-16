export class AppService{
    getNotes(){
        return [
          {
                title:"Create Control Explicitly: Model-driven form",
                description:"",
                note: `	import {ControlGroup,Control} from 'angular2/common'
@Component({
    template:'<form [ngFormModel]="formVar" ><input ngControl="comment"/></form>
})
export class FormComponent{
    formVar = new ControlGroup({
        comment: new Control()
    });
}`
            } ,
          {
                title:"FormBuilder",
                description:"more compact, allows injection",
                note: `	import {FormBuilder} from 'angular2/common'
	export class ContactComponent{
		formVar;
		constructor(fb:FormBuilder}{this.formVar = fb.group({comment:[]});}
	}`
            }  ,
          {
                title:"Validation",
                description:"",
                note: `	import {Validators} from 'angular2/common'
	@Component({
		template:'
			<form [ngFormModel]="formVar" >
				<input ngControl="comment"/>
			</form>'})
	export class FormComponent{
		formVar = new ControlGroup({
			comment: new Control('defaultValue',Validators.required)
		});
	}`
            }  ,
          {
                title:"Valid Errors",
                description:"",
                note: `	@Component({
		template:'
			<form [ngFormModel]="formVar" >
				<input #="nametemp"/>
				<div *ngIf="!nametemp.valid">Username is invalid</div>
			</form>'})
	export class FormComponent{
		formVar = new ControlGroup({
			comment: new Control('defaultValue',Validators.required)
		});
	}`
            }  ,
          {
                title:"Custom Validation",
                description:"",
                note: `	--validator.component
	export class UsernameValidators{
		static isEmpty(someControl:Control){
			if(someControl){
				return{isEmpty:true};
			}
			return null;
		}
	}
	--app.component
	import {UsernameValidators} from './validator.component'
	export class FormComponent{
		formVar = new ControlGroup({
			comment: new Control('',Validators.compose([UsernameValidators.isEmpty]))
		});`
            }  ,
          {
                title:"Async Validation",
                description:"",
                note: `	--validator.component
	export class UsernameValidators{
		static isUnique(someControl:Control){
			return new Promise((resolve,reject)=>{
				//server call with callback function that uses "resolve"
				setTimeout(function(){
					if(control.value =="test"){
						resolve({isUnique:true});
					else
						resolve({isUnique:false});
					}
				},1000)
			});
		}
	}
	--app.component
	import {UsernameValidators} from './validator.component'
	export class FormComponent{
		formVar = new ControlGroup({
			//note that this is the third parameter for async
			comment: new Control('',,UsernameValidators.isUnique)
		});`
            }  ,
          {
                title:"Loader Image",
                description:"",
                note: `	<input #somevar="ngForm"/>
	<div *ngIf="somevar.control.pending">Checking...</div>`
            }   ,
          {
                title:"Validating Upon Form Submit",
                description:"",
                note: `	<form>
		<div *ngIf="form.errors.invalidForm" >Invalid form</div>
	<form>
	
	export class FormComponent{
		onSubmit(){
			var result = authService.login(this.form.value);
			this.form.setErrors({invalidForm:true});
		}`
            }  
        ];
    }
}