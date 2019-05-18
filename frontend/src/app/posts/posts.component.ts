import {Component, OnInit} from '@angular/core';

import api from '../../api';
import {PostDetail} from '../post_detail.model';

@Component({
  selector: 'post-list',
  templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit {
  posts: Array<PostDetail> = [];

  async ngOnInit() {
    await this.updatePosts();
  }

  async updatePosts() {
    try {
      const {data} = await api.get('posts');
      this.posts = data;
    } catch (error) {
    }
  }
}
