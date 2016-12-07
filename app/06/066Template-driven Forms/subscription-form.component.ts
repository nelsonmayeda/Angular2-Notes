import {Component} from '@angular/core';

@Component({
    selector: 'subscription-form',
    //moduleId: module.id,
    //templateUrl:'subscription-form.html',
    template:``,
    styles:[``]
})
export class SubscriptionFormComponent {

    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(arg){
        console.log('form ', arg.value);
    }
}