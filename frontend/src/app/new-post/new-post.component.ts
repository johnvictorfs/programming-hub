import { Component } from "@angular/core";

import api from "../../api";
import { PostDetail } from "./model/post_detail.model";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html"
})
export class NewPostComponent {
  success = false;
  error = false;

  postDetails: PostDetail = {
    authorId: 1,
    title: "",
    content: "",
    description: "",
    category: ""
  };

  async enviarPost() {
    try {
      const response = await api.post("/posts", this.postDetails);
      this.success = true;
    } catch (error) {
      this.error = true;
    }
  }
}
