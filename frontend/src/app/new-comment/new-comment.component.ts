import { Component, Input } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import api from "../../api";

@Component({
  selector: "app-new-comment",
  templateUrl: "./new-comment.component.html",
  styleUrls: ["./new-comment.component.css"]
})
export class NewCommentComponent {
  constructor(private toastr: ToastrService) {}

  @Input() public postId: number;
  @Input() public onSave: Function;
  commentBody: string = "";

  async sendComment() {
    if (!this.commentBody) {
      return this.toastr.error("Você não pode enviar um comentário vazio!");
    }
    await api.post("comments", {
      authorId: 1,
      authorName: "AuthorName",
      postId: this.postId,
      content: this.commentBody
    });
    this.commentBody = "";
    this.toastr.success("Comentário enviado com sucesso!");
    await this.onSave();
  }
}
