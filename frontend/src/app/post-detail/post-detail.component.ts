import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import PostDetail from './PostDetail';
import Comment from '../comment/model/comment.model';
import api from '../../api';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: PostDetail;
  comments: Array<Comment> = [];

  error = false;

  constructor(private route: ActivatedRoute) {
    this.updateComments = this.updateComments.bind(this);
  }

  async ngOnInit() {
    try {
      const { id } = this.route.snapshot.params;

      const postResponse = await api.get(`/posts/${id}`);
      this.post = postResponse.data;

      await this.updateComments();
    } catch (error) {
      this.error = true;
      return;
    }
  }

  async updateComments() {
    const { id } = this.route.snapshot.params;
    const commentsResponse = await api.get(`/comments/post/${id}`);
    this.comments = commentsResponse.data;
  }
}
