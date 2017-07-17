import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class User2Component {
  user = {
    username:  'Rahul k ',
    tweetername: '@rahulk',
    tweets: 920,
    following: 8820,
    followers: 4580,
    tweet : 'It was nice meeting  you Mr. Prime Miniser. It was nice meeting  you Mr. Prime Miniser @NarendraModi',
    time : '10h',
    imgUrl : 'http://www.macmillandictionaryblog.com/wp-content/uploads/2011/07/Small-Talk-image.jpg',
    retweets : 99870,
    up: 589,
    likes: 49,
    messages : 129
  }
}
