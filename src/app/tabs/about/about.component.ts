import { Component, OnInit } from '@angular/core';
import {CommentsDataService} from '../service/comments-data.service';
import {CommentsModel} from '../components/comments/model/comments-model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  comments: CommentsModel;

  constructor(private commentsService: CommentsDataService) {
    this.commentsService.getCommentsForAbout().subscribe( e => {
      this.comments = e;
    });
  }

  ngOnInit() {
  }

}
