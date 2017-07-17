import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class User1Component  {

    user = {
    username:  'Rachit Aggarwal ',
    tweetername: '@rachitaggarwal112',
    tweets: 12,
    following: 200,
    followers: 980,
    tweet : 'It was nice meeting  you Mr. Prime Miniser @NarendraModiIt was nice meeting  you Mr. Prime Miniser @NarendraModi',
    time : '4h',
    imgUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabDRirdHEFt6moZPeEAGi8B86X9LOBmsq0MBJSXOl1SR2sVIG',
    retweets : 120,
    up: 590,
    likes: 49889,
    messages : 789
  }

}
