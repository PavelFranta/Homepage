import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CommentsModel} from './model/comments-model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentsComponent implements OnInit {
  @Input() model: CommentsModel;

  constructor() { }

  ngOnInit() {
  }

}
