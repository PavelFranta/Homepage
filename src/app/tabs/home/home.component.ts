import { Component, OnInit } from '@angular/core';
import {CommentsModel} from '../components/comments/model/comments-model';
import {CommentsDataService} from '../service/comments-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  comments: CommentsModel;

  constructor(private commentsService: CommentsDataService) {
    this.commentsService.getCommentsForHome().subscribe( e => {
      this.comments = e;
    });
  }

  ngOnInit() {

  }

}
