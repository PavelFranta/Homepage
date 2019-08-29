import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CommentModel} from '../model/comment-model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentComponent implements OnInit {
  @Input() model: CommentModel;

  constructor() { }

  ngOnInit() {
  }

}
