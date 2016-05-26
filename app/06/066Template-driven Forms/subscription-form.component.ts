import {Component} from '@angular/core';

@Component({
    selector: 'subscription-form',
    template: `<form #f="ngForm" (ngSubmit)="onSubscribe(f.form)">
    <div class="form-group">
        <label for="name">Name</label>
        <input 
            ngControl="name" 
            #name="ngForm" 
            id="name" 
            type="text" 
            class="form-control" 
            required
            minlength="3">
        <div *ngIf="name.touched && name.errors">
            <div 
                class="alert alert-danger" 
                *ngIf="name.errors.required">
                Name is required.
            </div>
            <div
                class="alert alert-danger"
                *ngIf="name.errors.minlength">
                Name should be minimum {{ name.errors.minlength.requiredLength }} characters.
            </div>
        </div>
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input 
            ngControl="email" 
            #email="ngForm" 
            id="email" 
            type="email" 
            class="form-control" 
            required>
        <div 
            class="alert alert-danger" 
            *ngIf="email.touched && !email.valid">
            Email is required.
        </div>
    </div>
    <div class="form-group">
        <label for="frequency">Frequency of emails</label>
        <select
            ngControl="frequency" 
            #frequency="ngForm" 
            id="frequency" 
            class="form-control" 
            required>
            <option value=""></option>
            <option *ngFor="let frequency of frequencies" value="{{ frequency.id }}">
                {{ frequency.label }}
            </option>
        </select> 
        <div 
            class="alert alert-danger" 
            *ngIf="frequency.touched && !frequency.valid">
            This field is required.
        </div>
    </div>
    <button class="btn btn-primary" type="submit" [disabled]="!f.valid">Subscribe</button>
</form>`
})
export class SubscriptionFormComponent {
    frequencies = [
        { id: 1, label: 'Daily' }, 
        { id: 2, label: 'Weekly' },
        { id: 3, label: 'Monthly' }
    ];
    
    onSubscribe(form){
        console.log(form.value);
    }
}