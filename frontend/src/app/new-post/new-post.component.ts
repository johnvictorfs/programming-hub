import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import api from "../../api";
import { PostDetail } from "../post_detail.model";

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
    for (const key in this.postDetails) {
      if (!this.postDetails[key]) {
        return this.toastr.error("Você não pode deixar campos em branco!");
      }
    }
    try {
      await api.post("/posts", this.postDetails);
      this.postDetails = {
        authorId: 1,
        title: "",
        content: "",
        description: "",
        category: ""
      };
      this.toastr.success("Post enviado com Sucesso!");
      setTimeout(() => this.router.navigate(["/"]), 750);
    } catch (error) {
      this.toastr.error("Erro ao tentar enviar post");
    }
  }
}
