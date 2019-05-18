import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import api from "../../api";
import { PostDetail } from "./model/post_detail.model";

@Component({
  selector: "app-new-post",
  templateUrl: "./new-post.component.html"
})
export class NewPostComponent {
  constructor(private toastr: ToastrService, private router: Router) {}

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
      this.postDetails = {
        authorId: 1,
        title: "",
        content: "",
        description: "",
        category: ""
      };
      this.toastr.success("Post enviado com Sucesso!");
      this.router.navigate(["/"]);
    } catch (error) {
      this.toastr.error("Erro ao tentar enviar post");
    }
  }
}
