import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import PostDetail from "./PostDetail";
import Comment from "../comment/model/comment.model";
import api from "../../api";

@Component({
  selector: "app-post-detail",
  templateUrl: "./post-detail.component.html",
  styleUrls: ["./post-detail.component.css"]
})
export class PostDetailComponent implements OnInit {
  post: PostDetail;

  comments: Array<Comment> = [
    { author: "john", authorId: 1, content: "blah" },
    { author: "maria", authorId: 2, content: "thing" }
  ];

  error = false;

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    try {
      const { id } = this.route.snapshot.params;
      const { data } = await api.get(`/posts/${id}`);
      if (data) {
        this.post = data;
      } else {
        this.error = true;
      }
    } catch (error) {
      this.error = true;
      return;
    } finally {
      const { data } = await api.get(`/users/${this.post.authorId}`);
      if (data) {
        this.post.author = data.username;
      }
    }
  }
}
