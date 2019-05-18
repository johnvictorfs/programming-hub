import { Component, OnInit } from '@angular/core';

import { PostList } from './model/post_list.model';
import { ActivePost } from './model/active_post.model';
import api from '../../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  noPosts: boolean;

  posts: Array<PostList> = [];

  activePost: ActivePost;

  async ngOnInit() {
    try {
      const { data } = await api.get('/posts');
      if (!data.length) {
        this.noPosts = true;
        return;
      }
      this.activePost = data[0];
      // Pegar os primeiros 5 posts (ou todos se tiver menos de 5)
      // e armazenar em 'posts' para visualizar na aba de "Posts"
      for (let i = 0; i < Math.min(data.length, 5); ++i) {
        if (data[i]) {
          this.posts.push({ name: data[i].title, active: false, id: data[i].id });
        }
      }
      this.posts[0].active = true;
    } catch (error) {
      this.noPosts = true;
    }
  }

  async handleClick(item) {
    // Atualizar post ativo
    if (item.active) { return; }
    try {
      const { data } = await api.get(`/posts/${item.id}`);
      for (let i = 0; i < this.posts.length; ++i) {
        this.posts[i].active = false;
      }
      item.active = true;
      this.activePost = data;
    } catch (error) {
      console.error(error);
    }
  }
}
