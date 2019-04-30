import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent {
  commentBody: string = '';

  sendComment() {
    alert(`Comentário enviado com texto ${this.commentBody}`)
  }
}
