import { Component, OnInit } from '@angular/core';
import {CommentsModel} from '../components/comments/model/comments-model';
import {CommentsDataService} from '../service/comments-data.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
  comments: CommentsModel;

  constructor(private commentsService: CommentsDataService) {
    this.commentsService.getCommentsForKnowledge().subscribe( e => {
      this.comments = e;
    });
  }

  ngOnInit() {
  }

}
