import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentsComponent} from './comments/comments.component';
import {CommentComponent} from './comments/comment/comment.component';

@NgModule({
  declarations: [CommentsComponent, CommentComponent],
  imports: [
    CommonModule,
  ],
  exports: [CommentsComponent, CommentComponent]
})
export class ComponentsModule { }
