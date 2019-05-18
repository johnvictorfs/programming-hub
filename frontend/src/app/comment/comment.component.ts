import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import Comment from './model/comment.model';
import api from '../../api';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() public comment: Comment;
  @Input() public onSave: Function;
  commentAnswer = false;
  commentBody = '';
  childComments: Array<Comment> = [];

  constructor(private toastr: ToastrService) {
  }

  async ngOnInit() {
    try {
      const {data} = await api.get(`comments/childs/${this.comment.id}`);
      this.childComments = data;
    } catch (error) {
    }
  }

  toggleAnswer() {
    this.commentAnswer = !this.commentAnswer;
    this.commentBody = '';
  }

  postComment() {
    api
      .post('comments', {
        authorId: 1,
        authorName: 'AuthorName',
        postId: this.comment.postId,
        parentId: this.comment.id,
        content: this.commentBody
      })
      .then(() => {
        this.toastr.success('Comentário enviado com sucesso!');
        this.toggleAnswer();
        this.onSave();
      })
      .catch(error => {
        this.toastr.error('Erro ao enviar comentário.');
      });
  }
}
