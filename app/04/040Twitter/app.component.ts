import {Component} from 'angular2/core';
import {TweetComponent} from './tweet.component'
import {TweetService} from './tweet.service'

@Component({
    selector: 'twitter',
    template: `
        <div *ngFor="let tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class AppComponent {
    tweets: any[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }
}