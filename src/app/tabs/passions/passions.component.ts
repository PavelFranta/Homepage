import { Component, OnInit } from '@angular/core';
import {CommentsModel} from '../components/comments/model/comments-model';
import {CommentsDataService} from '../service/comments-data.service';

@Component({
  selector: 'app-passions',
  templateUrl: './passions.component.html',
  styleUrls: ['./passions.component.scss']
})
export class PassionsComponent implements OnInit {
  comments: CommentsModel;

  constructor(private commentsService: CommentsDataService) {
    this.commentsService.getCommentsForPassions().subscribe( e => {
      this.comments = e;
    });
  }

  ngOnInit() {
  }

}
