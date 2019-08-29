import {CommentModel} from './comment-model';

export interface CommentsModel {
  header: string;
  commentItems: CommentModel[];
}
