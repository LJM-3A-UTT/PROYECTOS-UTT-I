import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: TrackModel={
  cover:'https://upload.wikimedia.org/wikipedia/en/4/4b/My_lovin%27.jpg',
  album:'En Vogue Funky Divas',
  name:'MY LOVIN’(YOU’RE NEVER GONNA GET IT)',
  _id: 1,
  url:'http://localhost/track.mp3',

}
  constructor() { }

  ngOnInit(): void {
  }

}
