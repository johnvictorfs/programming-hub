import {Component} from '@angular/core';

import {PostDetail} from './model/post_detail.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'
})

export class NewPostComponent {
  postDetails: PostDetail = {
    authorId: 0,
    title: '',
    content: '',
    description: '',
    category: ''
  };

  enviarPost() {
    // Enviar novo post aqui
  }
}
