import { Component, OnInit } from '@angular/core';
import {CommentsModel} from '../components/comments/model/comments-model';
import {CommentsDataService} from '../service/comments-data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  comments: CommentsModel;

  constructor(private commentsService: CommentsDataService) {
    this.commentsService.getCommentsForQuestions().subscribe( e => {
      this.comments = e;
    });
  }

  ngOnInit() {
  }

}
